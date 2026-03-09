import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      {/* Page Content */}
      <div className="page-content mb-15">
        <section className="py-4 py-md-5">
          <div className="px-4  "> 
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-3">
                <h2 className="title mb-0 text-center md:text-5xl mt-15 md:mt-50 sm:mt-40 font-bold">
                  Terms and Conditions
                </h2>
              </div>
            </div>

            <div className="row mt-10 mt-md-5">
              <div className="col-lg-12 col-md-12">

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-5  sm:ml-15">1. Description of Service</h4>
                <p className="mb-3 md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  Baskota Consultancy will provide Services described in the ‘Letter of Engagement’. Baskota Consultancy will endeavour to carry out our obligations in accordance with the timescales set out in the estimate; where stated. However, unless both parties specifically agree otherwise in writing, the dates contained in the estimate are indicative dates intended for planning and estimating purpose only and are not contractually binding. Any estimates of time for completion of the Services are given on the assumption Baskota Consultancy receives co-operation, diligence and commitment from you. For the avoidance of doubt, Baskota Consultancy will not be liable for any failure or delay in performing the Services if that failure or delay arises from anything beyond Baskota Consultancy's reasonable control.Either of the parties may request changes to the Services. Both parties agree to work together to enable both parties to assess the impact of any requested changes on the cost, timing and any other aspect of the Services.!
                </p>

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-7 sm:ml-15">2. Information</h4>
                <p className="mb-3 md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  You agree to provide in a timely fashion all information and documents reasonably required to enable Baskota Consultancy to provide the Services. Baskota Consultancy will not independently verify the accuracy of such information and documents and will not be liable for any loss of damage arising from any inaccuracy or other defect in any information or documents supplied by you.
                </p>

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-7 sm:ml-15">3. Fees and Payment</h4>
                <p className="mb-3 md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  Baskota Consultancy's fees are calculated on the basis of time spent on the assignment by our partners and staffs in accordance with hourly rates current at the time the Services are performed. Unless otherwise stated, any total quantum of fees indicated in the ‘Letter of Engagement’ are indicative estimates only based upon the preliminary information provided by you and our experience with similar and/or your previous engagements. Any fees quoted are not fixed, unless otherwise stated, and Baskota Consultancy reserves the right to render fee invoices for an amount based upon time spent, greater than any quantum indicated in the estimate.
                </p>

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-7 sm:ml-15   ">4. Performance</h4>
                <p className="mb-3 md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  Baskota Consultancy's performance is dependent on you carrying out your responsibilities as set out in the Contract and you providing all information reasonably requested by Baskota Consultancy in a complete and timely manner. Should this not occur, it may lead to an increase in fees depending upon the extent to which Baskota Consultancy has to perform more work.
                </p>

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-7 sm:ml-15">5. Terms</h4>
                <p className="mb-4 mb-md-5  md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  This Contract will apply from the date that you are accepting our ‘Letter of Engagement’ and ask us to proceed with the Services. That date will be the “Commencement Date”. The Contract will continue until it is terminated in writing by either party on in accordance with the terms set out below.
                </p>

                <h4 className="text-theme text-blue-600 md:text-4xl font-semibold md:mb-5 ml-7 sm:ml-15">6. Termination</h4>
                <p className="mb-4 mb-md-5  md:text-xl sm:ml-15 ml-7 mr-4 font-Poppins text-justify">
                  The Contract may be terminated by either party by providing written notice. If the Contact is terminated prior to completion of the Services, Baskota Consulting shall be entitled to be paid for work that has been carried out or for where expenses have been incurred up to the date of termination.
                </p>

                {/* Responsive Buttons */}
                <div className="flex flex-column flex-sm-row md:h-10 ml-4 gap-5 md:gap-10 md:p-5 md:m-10">
                  <Link href="/" >
                    <button className="btn h-15 mt-4 w-25 text-xl bg-blue-600 font-semibold font-Poppins text-white hover:bg-red-400 rounded-sm p-4  hover:cursor-grab ">Accept</button>
                  </Link>
                  <Link href="/" className="btn btn-border mb-7">
                     <button className="btn mt-4 h-15 w-25 text-xl bg-white font-semibold font-Poppins text-black border-2 border-black hover:bg-blue-600 rounded-sm p-4   hover:cursor-grab ">Close</button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
