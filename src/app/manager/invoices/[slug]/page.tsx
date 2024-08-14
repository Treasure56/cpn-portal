import { invoiceDummy } from "@/utils/dummy";
import Invoice from "./Invoice";
import { PageTitle } from "@/components/admin";

export default function Page() {
    const invoice = invoiceDummy;
    
    return (
        <div>
             <PageTitle className="py-2 flex justify-between w-full items-center">
        Invoice #{invoice.voucner_number}
          <button id="download-pdf" className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Download PDF
          </button>
      </PageTitle>
           <Invoice {...invoice} />
           {/* </div> */}
        </div>
    );
}