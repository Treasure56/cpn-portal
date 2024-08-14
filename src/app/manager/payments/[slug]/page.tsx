import { paymentDummy } from "@/utils/dummy";
import Reciept from "./Reciept";
import { PageTitle } from "@/components/admin";

export default function Page() {
    const payment = paymentDummy;
    
    return (
        <div className="flex flex-col gap-4 items-stretch">
          <PageTitle className="py-2 flex justify-between w-full items-center">
        Payment #{payment.voucner_number}
          <button id="download-pdf" className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Download PDF
          </button>
      </PageTitle>
           <Reciept {...payment} />
        </div>
    );
}