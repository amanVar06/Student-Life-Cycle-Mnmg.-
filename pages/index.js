import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SLCM-AAM</title>
        <meta name="SLCM" content="student life cycle management app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Welcome To Student Master Database
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              This app is created to manage all the documents issued to a
              student in his life cyle whether its school certificates, college
              degree etc.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-full h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
            <h2 className="text-2xl mt-5">Who Are You?</h2>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 ">
            <div className="p-2 md:w-1/3 flex flex-col text-center items-center hover:border-blue-300 hover:border-4">
              <a
                href="/institutelogin"
                className="mt-1 text-blue-500 inline-flex items-center"
              >
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Institution
                  </h2>
                  <p className="leading-relaxed text-base">
                    Institutions can add and update the documents linked to its
                    students.
                  </p>
                </div>
              </a>
            </div>
            <div className="p-2 md:w-1/3 flex flex-col text-center items-center hover:border-blue-300 hover:border-4">
              <a
                href="/govlogin"
                className="mt-1 text-blue-500 inline-flex items-center"
              >
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Government
                  </h2>
                  <p className="leading-relaxed text-base">
                    Government can see the all documents linked to a student.
                  </p>
                </div>
              </a>
            </div>
            <div className="p-2 md:w-1/3 flex flex-col text-center items-center hover:border-blue-300 hover:border-4">
              <a
                href="/studentlogin"
                className="mt-1 text-blue-500 inline-flex items-center"
              >
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Student
                  </h2>
                  <p className="leading-relaxed text-base">
                    Student can see, download and request to update issued
                    documents.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
