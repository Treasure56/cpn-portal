export type AdminOverViewCardProps = {
    title: string,
    icon: React.ReactNode,
    count: number,
    color: string
}
export default function AdminOverViewCard({title, icon, count, color}: AdminOverViewCardProps) {
    return (
            <div style={{backgroundColor: color}} className="flex justify-between p-8 rounded-xl text-light shadow-[0_0_25px_5px_#00000033]">
               <div className="border border-light size-10 flex items-center justify-center p-2 rounded-lg text-5xl">
               {icon}
               </div>
               <div className="flex flex-col text-light items-end">
                   <p className=" text-lg font-[500] text-right">{title}</p>
                   <p className=" text-2xl font-semibold text-right">{count}</p>
               </div>
            </div>
            
    );
}