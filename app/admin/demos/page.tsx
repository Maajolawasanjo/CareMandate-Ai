import { supabaseAdmin } from "@/lib/supabase";
import { grantAccess } from "@/app/actions/demo";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function AdminDemosPage() {
  const { data: demos, error } = await supabaseAdmin
    .from("demo_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching demos:", error);
  }

  const demoList = demos || [];

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-6 py-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Demo Requests</h1>
        <p className="text-slate-500 mt-2">Manage and schedule incoming demo requests.</p>
      </div>

      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Email</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Time</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {demoList.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  No demo requests found.
                </td>
              </tr>
            ) : (
              demoList.map((demo) => (
                <tr key={demo.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{demo.email}</td>
                  <td className="px-6 py-4 text-slate-500">{demo.date}</td>
                  <td className="px-6 py-4 text-slate-500">{demo.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      demo.status === 'PENDING' ? 'bg-amber-100 text-amber-700' :
                      demo.status === 'SCHEDULED' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {demo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {demo.status === "PENDING" && (
                      <form action={async () => {
                        "use server";
                        await grantAccess(demo.id);
                      }}>
                        <button 
                          type="submit"
                          className="px-4 py-2 bg-[#5B1C6D] text-white rounded-lg text-sm font-bold hover:bg-[#4A1658] transition-colors"
                        >
                          Grant Access
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
