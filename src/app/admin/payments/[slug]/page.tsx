import { paymentDummy } from "@/utils/dummy";
import Reciept from "./Reciept";
import { PageTitle } from "@/components/admin";
import { fetchSinglePayment } from "@/actions";

export default async function Page({params}: {params: {slug: string}}) {
    const payment = await fetchSinglePayment(params.slug);
    if(!payment || payment == "error") return <div className="info">Error fetching payments</div>
    
    return (
        <div className="flex flex-col gap-4 items-stretch">
          <PageTitle className="py-2 flex justify-between w-full items-center">
        {/* Payment #{payment.voucher_number ?? ''} */}
          <button id="download-pdf" className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Download PDF
          </button>
      </PageTitle>
           <Reciept {...payment} />
        </div>
    );
}