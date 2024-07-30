export type AdminOverViewCardProps = {
    title: string,
    icon: React.ReactNode,
    count: number,
    color: string
}
export default function AdminOverViewCard({title, icon, count, color}: AdminOverViewCardProps) {
    return (
            <div style={{backgroundColor: color}} className="flex justify-between p-8 rounded-xl text-light">
               <div className="border border-light size-10 flex items-center justify-center p-2 rounded-lg text-5xl">
               {icon}
               </div>
               <div className="flex flex-col text-light items-end">
                   <p className=" text-lg font-semibold">{title}</p>
                   <p className=" text-[2rem] font-semibold">{count}</p>
               </div>
            </div>
            
    );
}