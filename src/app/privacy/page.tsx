"use client";

import { Contact } from "@/components/elements/Contact";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { Lilita_One } from "next/font/google";
import React from "react";

interface pageProps {}

const lilita_one = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const Page: React.FC<pageProps> = ({}) => {
  return (
    <>
      <Header />
      <div className={`md:mx-auto md:container !${lilita_one.className}`}>
        <h1 className={`text-2xl text-white ${lilita_one.className} p-2`}>
          Nutzungsbedingungen
        </h1>
        <div className={`${lilita_one.className} !text-white`}>
          <div className="p-2">
            <h1 className="text-xl text-white">
              1.Introduction and contact details of the person responsible
            </h1>
          </div>
          <div className={`p-2`}>
            1.1 We are pleased that you are visiting our website and thank you
            for your interest. In the following we inform you about the handling
            of your personal data when using our website. Personal data is all
            data with which you can be personally identified.
          </div>
          <div className="p-2">
            1.2 The person responsible for data processing on this website
            within the meaning of the General Data Protection Regulation (GDPR)
            is Muhammet Kara, Preußenstraße 72, 44532 Lünen, Germany, Tel.:
            +491707774241, email: info@gamingfingers.de. The person responsible
            for the processing of personal data is the natural or legal person
            who alone or jointly with others decides on the purposes and means
            of the processing of personal data.
          </div>
          <div className="p-2">
            1.3 For security reasons and to protect the transmission of personal
            data and other confidential content (e.g. orders or inquiries to the
            person responsible), this website uses an SSL or TLS encryption. You
            can recognize an encrypted connection by the character string
            “https://” and the lock symbol in your browser line.
          </div>
          <div className="p-2">
            2. Data collection when you visit our website
          </div>
          <div className="p-2">
            If you only use our website for informational purposes, i.e. if you
            do not register or otherwise provide us with information, we only
            collect data that your browser transmits to our server (so-called
            “server log files”). When you visit our website, we collect the
            following data that is technically necessary for us to display the
            website to you:
            <div className="mt-10">Our visited website</div>
            <div className="mt-10">Date and time at the time of access</div>
            <div className="mt-10">Amount of data sent in bytes</div>
            <div className="mt-10">
              Source/reference from which you came to the page
            </div>
            <div className="mt-10">Browser used</div>
            <div className="mt-10">Operating system used</div>
            <div className="mt-10">
              IP address used (if applicable: in anonymized form)
            </div>
            <div className="mt-10">
              The processing takes place in accordance with Article 6 Paragraph
              1 Letter f GDPR on the basis of our legitimate interest in
              improving the stability and functionality of our website. The data
              will not be passed on or used in any other way. However, we
              reserve the right to subsequently check the server log files if
              there are concrete indications of illegal use.
            </div>
          </div>
          <div className="p-2">
            3. Cookies
            <div className="mt-10">
              In order to make visiting our website attractive and to enable the
              use of certain functions, we use so-called cookies on various
              pages. These are small text files that are stored on your end
              device. Some of the cookies we use are deleted after the end of
              the browser session, i.e. after closing your browser (so-called
              session cookies). Other cookies remain on your end device and
              enable us or our partner companies (third-party cookies) to
              recognize your browser on your next visit (persistent cookies). If
              cookies are set, they collect and process certain user information
              such as browser and location data as well as IP address values
              ​​to an individual extent. Persistent cookies are automatically
              deleted after a specified period, which can vary depending on the
              cookie.
            </div>
            <div className="mt-10">
              If personal data is also processed by individual cookies
              implemented by us, the processing takes place in accordance with
              Article 6 Paragraph 1 Letter b GDPR either to execute the contract
              or in accordance with Article 6 Paragraph 1 Letter f GDPR to
              safeguard our legitimate interests the best possible functionality
              of the website and a customer-friendly and effective design of the
              page visit.
            </div>
            <div className="mt-10">
              We may work with advertising partners who help us to make our
              website more interesting for you. For this purpose, cookies from
              partner companies are also stored on your hard drive when you
              visit our website (third-party cookies). If we work together with
              the aforementioned advertising partners, you will be informed
              individually and separately about the use of such cookies and the
              scope of the information collected in each case within the
              following paragraphs.
            </div>
            <div className="mt-10">
              Please note that you can set your browser so that you are informed
              about the setting of cookies and can decide individually whether
              to accept them or exclude the acceptance of cookies for certain
              cases or in general. Each browser differs in the way it manages
              cookie settings. This is described in the help menu of each
              browser, which explains how you can change your cookie settings.
              These can be found for the respective browsers under the following
              links:
            </div>
            <div className="mt-4">
              Microsoft Edge:
              https://support.microsoft.com/de-de/microsoft-edge/temporäres-zulassen-von-cookies-und-website-daten-in-microsoft-edge-597f04f2-c0ce-f08c-7c2b-541086362bd2
            </div>
            <div className="mt-4">
              Firefox:
              https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
            </div>
            <div className="mt-4">
              Chrome:
              http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647
            </div>
            <div className="mt-4">
              Safari: https://support.apple.com/de-de/guide/safari/sfri11471/mac
            </div>
            <div className="mt-4">
              Opera: http://help.opera.com/Windows/10.20/de/cookies.html
            </div>
            <div className="mt-4">
              Please note that if cookies are not accepted, the functionality of
              our website may be restricted.
            </div>
          </div>
          <div className="p-2">
            4. Contact
            <div className="mt-10">
              When contacting us (e.g. via contact form or e-mail), personal
              data is collected. Which data is collected when using a contact
              form can be seen from the respective contact form. This data is
              stored and used exclusively for the purpose of answering your
              request or for establishing contact and the associated technical
              administration.
            </div>
            <div className="mt-10">
              The legal basis for the processing of this data is our legitimate
              interest in answering your request in accordance with Article 6
              (1) (f) GDPR. If your contact is aimed at concluding a contract,
              the additional legal basis for processing is Art. 6 (1) (b) GDPR.
              Your data will be deleted once your request has been processed.
              This is the case if it can be inferred from the circumstances that
              the facts in question have been finally clarified and provided
              that there are no legal storage obligations to the contrary.
            </div>
          </div>
          <div className="p-2">
            5. Rights of the data subject
            <div className="mt-10">
              5.1 The applicable data protection law grants you the following
              data subject rights (rights to information and intervention
              rights) vis-à-vis the person responsible with regard to the
              processing of your personal data, whereby reference is made to the
              legal basis given for the respective exercise requirements:
            </div>
            <div className="mt-4">
              Right to information according to Art. 15 GDPR;
            </div>
            <div className="mt-4">
              Right to rectification according to Art. 16 GDPR;
            </div>
            <div className="mt-4">
              Right to erasure according to Art. 17 GDPR;
            </div>
            <div className="mt-4">
              Right to restriction of processing in accordance with Art. 18
              GDPR;
            </div>
            <div className="mt-4">
              Right to information according to Art. 19 GDPR;
            </div>
            <div className="mt-4">
              Right to data portability according to Art. 20 GDPR;
            </div>
            <div className="mt-4">
              Right to revoke granted consent in accordance with Art. 7 Para. 3
              GDPR;
            </div>
            <div className="mt-4">
              Right to complain according to Art. 77 GDPR.
            </div>
          </div>
          <div className="p-2">
            5.2 RIGHT TO OBJECT
            <div className="mt-10">
              IF WE PROCESS YOUR PERSONAL DATA ON THE BASIS OF A BALANCING OF
              INTERESTS IN OUR PREVIOUS LEGITIMATE INTERESTS, YOU HAVE THE RIGHT
              AT ANY TIME TO OBJECT TO THIS PROCESSING FOR REASONS ARISING FROM
              YOUR PARTICULAR SITUATION WITH EFFECT FOR THE FUTURE.
            </div>
            <div className="mt-10">
              IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP THE PROCESSING
              OF THE DATA INVOLVED. HOWEVER, FURTHER PROCESSING REMAINS RESERVED
              IF WE CAN PROVE COMPREHENSIVE REASONS FOR PROCESSING THAT OVERRIDE
              YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FUNDAMENTAL FREEDOMS, OR IF
              THE PROCESSING IS FOR THE CERTIFICATION, EXERCISE OR DEFENSE OF
              LEGAL CLAIMS.
            </div>
            <div className="mt-10">
              IF YOUR PERSONAL DATA IS PROCESSED BY US FOR DIRECT ADVERTISING
              PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
              PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSES OF SUCH
              ADVERTISING. YOU MAY OBJECT AS DESCRIBED ABOVE.
            </div>
            <div className="mt-10">
              IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP THE PROCESSING
              OF THE DATA INVOLVED FOR DIRECT MARKETING PURPOSES.
            </div>
          </div>
          <div className="p-2">
            6. Duration of storage of personal data
            <div className="mt-10">
              The duration of the storage of personal data is based on the
              respective legal basis, the processing purpose and – if relevant –
              also based on the respective statutory retention period (e.g.
              commercial and tax retention periods).
            </div>
            <div className="mt-10">
              When processing personal data on the basis of an express consent
              in accordance with Article 6 Paragraph 1 lit. a GDPR, this data is
              stored until the person concerned revokes his consent.
            </div>
            <div className="mt-10">
              If there are statutory retention periods for data that are
              processed as part of legal or similar obligations on the basis of
              Article 6 (1) (b) GDPR, this data will be routinely deleted after
              the retention period has expired, provided that it is no longer
              required to fulfill or initiate a contract and/or we have no
              legitimate interest in further storage.
            </div>
            <div className="mt-10">
              When personal data is processed on the basis of Article 6 (1) (f)
              GDPR, this data is stored until the data subject exercises his or
              her right to object under Article 21 (1) GDPR, unless we can
              provide compelling reasons worthy of protection for processing
              that outweigh the interests, rights and freedoms of the data
              subject, or the processing serves to assert, exercise or defend
              legal claims.
            </div>
            <div className="mt-10">
              When processing personal data for the purpose of direct
              advertising on the basis of Article 6 Paragraph 1 lit. f GDPR,
              this data is stored until the data subject exercises his right of
              objection under Article 21 Paragraph 2 GDPR.
            </div>
            <div className="mt-10">
              Unless otherwise stated in the other information in this
              declaration on specific processing situations, stored personal
              data will be deleted when they are no longer necessary for the
              purposes for which they were collected or otherwise processed.
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
