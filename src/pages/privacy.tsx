import MainLayout from "@/components/templates/Layout"

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export const PRIVACY_CONTENT = [
  {
    header: 'Introduction',
    content:
      'Transia, LLC. d/b/a Decentralend (Decentralend,” “we”, “us”, or “our”) is committed to protecting your privacy. We have prepared this Privacy Policy to describe to you our practices regarding the information we collect, use, and share in connection with the Decentralend and Decentralend Pro websites, mobile apps, and other services we and our affiliates provide to you (collectively, the "Service").',
  },
  {
    header: 'Types of Information We Collect',
    content: 'We collect information about our users, as described below.',
  },
  {
    header: 'Information You Provide Us',
    content:
      'Account Information. When you create an account or use our Service, you provide us with certain information. We collect this information and other data you add to your account, such as email address, username, linked social media accounts, favorited items and watchlisted collections, and other information you provide. Your Account Information (other than your email address) will be publicly visible. Remember public content can exist elsewhere on the internet even after you remove it from your account on Decentralend.',
    subSections: [
      {
        header: 'Verification Information',
        content:
          'We may need to collect information to verify your account or identity, such as your phone number, email address or information relating to the authentication app you use.',
      },
      {
        header: 'Preferences',
        content:
          'Our Service lets you store preferences like how your content is displayed, notification settings, and favorites. We may associate these choices with your account, browser, and/or mobile device.',
      },
      {
        header: 'Feedback',
        content:
          'If you provide us with feedback or contact us, we may receive your name and contact information (such as an email address), as well as any other content included in or associated with the message you send.',
      },
      {
        header: 'Other Information',
        content:
          'We also collect information and other data at other points in our Service where you voluntarily provide it or where we state that your information is being collected.',
      },
    ],
  },
  {
    header: 'Blockchain Wallet Address',
    content:
      'Additionally, like much of web3, your blockchain wallet address functions as your identity on Decentralend. Accordingly, you will need a blockchain wallet and associated wallet address to access certain aspects of the Service. We do not consider a blockchain wallet address, standing alone, to be information that identifies you. However, a blockchain wallet address may become associated with you, your user ID or information we collect about you when you use our Service.',
  },
  {
    header: 'Information Collected Automatically',
    content:
      'As you navigate through and interact with our Service, we may use automatic data collection technologies to collect certain information, including:',
    subSections: [
      {
        header: 'Interactions with our Service',
        content:
          'To provide our Service, analyze trends, enforce our Terms of Service, and make the Service more useful to you, we collect information (typically Anonymous Data) from you when you interact with our Service, including, but not limited to, your browser type or fingerprint, operating system, IP address and associated geolocation, device ID, blockchain wallet address, wallet type, actions and clickstream data, referring/exit pages, and date/time stamps. We may also store this data in log files.',
      },
      {
        header: 'Cookies or Other Tracking Technologies',
        content:
          'Like many online services, we use cookies to collect information. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) to analyze how users interact with our Service, make improvements to our product quality, and provide users with a more personalized experience. In addition, we use "Pixel Tags" (also referred to as clear Gifs, Web beacons, or Web bugs). Pixel Tags allow us to analyze how users find our Service, make the Service more useful to you, and tailor your experience with us to meet your particular interests and needs.',
      },
      {
        header: 'Do Not Track',
        content:
          'As there is no common understanding about what a "Do Not Track" signal is supposed to mean, we don’t respond to those signals in any particular way. See further information below regarding how you may be able to withdraw your consent for the use of certain tracking technologies like cookies and pixel tags. You may also contact us here.',
      },
    ],
  },
  {
    header: 'Third-Party Services',
    content:
      'We engage with third-party services ("Third Party Services"), including Google and Amplitude, to help collect some of the information referred to above. These Third Party Services, acting on our behalf, may collect information about your use of our Service through their own cookies, Pixel Tags, or other technologies ("Usage Information"). The Third Party Services’ ability to use and share Usage Information is restricted by such Third Party Services’ terms of use and privacy policy.',
  },
  {
    header: 'Information Collected from Third-Party Companies',
    content:
      'We may receive information about you or related to you or your wallet address from service providers and other sources/companies that offer their products and/or services to us or to you, for use in conjunction with our Service, or whose products and/or services may be linked from our Service. We may add this to the data we have already collected from or about you through our Service. This information may include, for example:',
    subSections: [
      'third-party wallet providers and partners that provide us with your blockchain wallet address and certain other information you choose to share with those wallet providers and partners;',
      'data analytics providers or vendors who provide us information related to certain blockchain wallet addresses;',
      'vendors who provide communication and identity verification services to us and which you choose to use; and',
      'other vendors who provide us information necessary to run our business or enforce our Terms of Service.',
    ],
  },
  {
    header: 'Public Information',
    content:
      'We collect data from activity and information that is publicly visible and/or accessible on blockchains or other public sources. This may include, for example, blockchain wallet addresses and information regarding purchases, sales, or transfers of NFTs, which may then be associated with other data you have provided to us.',
  },
  {
    header: 'Use of Your Information',
    content:
      'We process information about and/or related to you to run our business, provide the Service, personalize your experience on the Service, and improve the Service. Specifically, we use your information to:',
    subSections: [
      'provide, operate and maintain the Service;',
      'improve and analyze the Service;',
      'analyze, improve, and personalize your use and experience on the Service, including by making recommendations to you;',
      'communicate with you;',
      'maintain the safety, security and integrity of our Service, and investigate, address, and prevent conduct that may violate our Terms of Service and/or that is otherwise harmful or unlawful;',
      'send you newsletters, promotional materials, and other notices related to our Service or third parties’ goods and services;',
      'comply with applicable laws, cooperate with investigations by law enforcement or other authorities of suspected violations of law, and/or to protect our and our Affiliates’ legal rights; and',
      'act in any other way which we have communicated to you and to which you have consented or we may describe when you provide your information.',
    ],
  },
  {
    header: 'Disclosure of Your Information',
    content:
      'We disclose your information and information about you as described below:',
    subSections: [
      {
        header: 'Third Party Service Providers',
        content:
          'We may share your information and information about you with third party service providers to: provide technical infrastructure services; conduct quality assurance testing; analyze how our Service is used; prevent, detect, and respond to unauthorized activities or potential violations of our Terms of Service or policies; identity verification purposes; provide technical and customer support; and/or to provide other support to you, us, and/or to the Service.',
      },
      {
        header: 'Affiliates',
        content:
          'In order to provide our Services in accordance with our contract with you and in our legitimate interests to run an efficient business, we may share some or all of your information and information about you with any subsidiaries, joint ventures, or other companies or products under our common control ("Affiliates"), in which case we will require our Affiliates to honor this Privacy Policy.',
      },
      {
        header: 'Information Related to Your Public Activity',
        content:
          'In order to provide our Services in accordance with our contract with you, we may display or share information relating to your public activity on blockchains, Decentralend, and/or Decentralend Pro. For example, we use technology like APIs to make certain information like your blockchain activity available to websites, apps, and others for their use.',
      },
      {
        header: 'Corporate Restructuring',
        content:
          'In our legitimate interests to run an effective business, we may share some or all of your information and information about you in connection with or during negotiation of any merger, financing, acquisition, or dissolution transaction or proceeding involving a sale, transfer, or divestiture of all or a portion of our business or assets. In the event of an insolvency, bankruptcy, or receivership, your information and information about you may also be transferred as a business asset. If another company acquires our company, business, or assets, that company will possess the information collected by us and will assume the rights and obligations regarding your information and information about you as described in this Privacy Policy.',
      },
      {
        header: 'Legal Rights',
        content:
          'In our legitimate interests to run an effective business and/or as required by law, regardless of any choices you make regarding your information (as described below), Decentralend may disclose your information and information about you if it believes in good faith that such disclosure is necessary: (i) in connection with any legal investigation; (ii) to comply with relevant laws or to respond to subpoenas, warrants, or other legal process served on Decentralend; (iii) to protect or defend the rights or property of Decentralend or users of the Service; and/or (iv) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Service.',
      },
      {
        header: 'Other Disclosures',
        content:
          'We may also disclose your information and information about you: to fulfill the purpose for which you provide it, including to provide you with our Service and new features or facilitate the use of login integrations in accordance with our contract with you; with our professional advisors in our legitimate interests to run an effective and successful business; for any other purpose disclosed by us when you provide it; or with your consent.',
      },
    ],
  },
  {
    header: 'Third-Party Websites',
    content:
      'Our Service may contain links to third-party websites. When you click on a link to any other website or location, you will leave our Service and go to another site, and another entity may collect information from you. We have no control over and cannot be responsible for these third-party websites or their content. Please be aware that this Privacy Policy does not apply to these third-party websites or their content, or to any collection of your information or information about you after you click on links to such third-party websites. We encourage you to read the privacy policies of every website you visit. Any links to third-party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content, or websites.',
  },
  {
    header: 'Third-Party Wallets',
    content:
      'To use certain aspects of our Service, you must use a wallet which allows you to engage in transactions on public blockchains. Your interactions with any third-party wallet provider are governed by the applicable terms of service and privacy policy of that third party.',
  },
  {
    header: 'Your Choices Regarding Information',
    content:
      'You have choices regarding the use of information on our Service:',
    subSections: [
      {
        header: 'Email Communications',
        content:
          'We may periodically send you newsletters and/or emails that directly promote the use of our Service or third parties’ goods and services. When you receive email communications from us, you may indicate a preference to stop receiving these communications from us by following the unsubscribe instructions provided in the email you receive or through the Notifications preferences in your Settings page. Despite these preferences, we may send you occasional transactional service-related informational communications.',
      },
      {
        header: 'Cookies',
        content:
          'If you decide at any time that you no longer wish to accept cookies from our Service for any of the purposes described above, you can change your browser settings to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. Consult your browser’s technical information to learn more. If you do not accept cookies, however, you may not be able to use all portions of the Service or all functionality of the Service.',
      },
      {
        header: 'Data Access and Control',
        content:
          'You can view, access, edit, or delete your information and information about you for certain aspects of the Service via your Settings page. Depending on applicable law where you reside, you may have certain rights in relation to information about you. However, such rights are not absolute and may apply only in certain circumstances. If such rights are not provided under law for your operating entity or jurisdiction, Decentralend has full discretion in fulfilling your request.',
      },
    ],
  },
  {
    header: 'Rights available may include',
    content:
      'the right to (i) request access and obtain a copy of your personal information, or certain details regarding the ways in which we use and disclose your personal information; (ii) request correction/rectification of inaccurate personal information that we hold about you; (iii) request deletion of your personal information; (iv) object to or restrict the processing of your personal information; (v) request portability of your personal information and (vi), if we have collected and processed your personal information based on your consent, you may have the right to withdraw your consent at any time.',
  },
  {
    header: 'If you wish to exercise your rights',
    content:
      'under an applicable data protection or privacy law, please contact us by using the “Submit a request” link here or at the address provided in Section 15 below, specify your request, and reference the applicable law. We may ask for additional information to verify your identity (such as your email address or government issued ID) or ask for more information about your request. We will consider and act upon any above request in accordance with applicable law. You may designate an authorized agent to make requests on your behalf to exercise your rights, but before accepting such a request from an agent, we will require them to provide proof you have authorized them to act on your behalf and may need you to verify your identity directly with us. We will not discriminate against you for exercising any of these rights.',
  },
  {
    header: 'If you believe that we have infringed your rights',
    content:
      'we encourage you to first contact us by using the “Submit a request” link here so that we can try to resolve the issue or dispute informally. If we deny your request, you may have the right to appeal our decision by contacting us through the “Submit a request” link here. While we hope you are satisfied with our responses, you also have the right to complain to the data protection regulator where you live or work.',
  },
  {
    header: 'Data Retention',
    content:
      'We may continue to retain your information or information about you even after you request deletion of your data if such retention is reasonably necessary to comply with our legal obligations, to resolve disputes, prevent fraud and abuse, enforce our Terms or other agreements, and/or protect our legal rights and other interests. We otherwise retain information for as long as is reasonably necessary for the purposes specified in this Privacy Policy. In determining the length of time, we consider criteria such as whether we need the information to continue providing our Services, comply with legal obligations, and other factors set out in this section.',
  },
  {
    header: 'Security',
    content:
      'We care about the security of your information and use physical, administrative, and technological safeguards to preserve the integrity and security of information collected through our Service. However, no security system is impenetrable and we cannot guarantee the security of our systems, or those of our vendors. In the event that any information under our custody and control is compromised as a result of a breach of our security, we will take steps to investigate and remediate the situation and, in accordance with applicable laws and regulations, may notify those individuals whose information may have been compromised. You are responsible for the security of your digital wallet, and we urge you to take steps to ensure it is and remains secure. If you discover an issue related to your wallet, please contact your wallet provider.',
  },
  {
    header: 'Minors',
    content:
      'We do not intentionally gather information from visitors who are under the age of 13 (or under the age of 16 for individuals in the EEA/UK). Our Terms of Service require all users to be at least 18 years old. Minors who are at least 13 years old (or at least 16 for individuals in the EEA/UK) but are under 18 years old may use a parent or guardian’s account, but only with the supervision of the account holder. If a child under 13 (or under 16 for individuals in the EEA/UK) submits identifiable information to us and we learn that the identifiable information is the information of a child under 13 (or under 16 for individuals in the EEA/UK), we will attempt to delete the information as soon as possible. If you believe that we might have any identifiable information from a child under 13 (or under 16 for individuals in the EEA/UK), please contact us by using the “Submit a request” link here or at the address indicated in Section 15 below.',
  },
  {
    header: 'Users Outside of the United States',
    content:
      'If you are a non-U.S. user of the Service, by visiting the Service and providing us with information directly or indirectly, you understand and acknowledge that your information and information about you may be processed in the country in which it was collected and in other countries, including the United States, where laws regarding processing of your information or information about you may be less stringent than the laws in your country.',
  },
  {
    header: 'For users in EEA, UK and Switzerland',
    content:
      'For the purposes of the EU and UK General Data Protection Regulation, Transia, LLC. is the controller and our contact details are set out in Section 15 below.',
  },
  {
    header: 'Legal Bases for Processing Personal Data',
    content:
      'When you access or use the Service, we collect, use, share, and otherwise process your personal data for the purposes described in this Privacy Policy. We rely on a number of legal bases to use your information in these ways.',
    subSections: [
      'We process your personal data with your consent,  for example, to: communicate with you; send you marketing emails and/or notifications; and for any other purpose that we communicate to you and to which you have consented.',
      'We process your personal data in order to fulfill our contract with you and to provide you with our Service, for example, to: provide, operate and maintain the Service; and investigate, address, and prevent conduct that may violate our Terms of Service.',
      'We process your personal data pursuant to our legitimate interests to provide effective services to you and maintain our business relationship, for example, to: improve and analyze the Service; and personalize your experience on the Service.',
      'We process your personal data in order to comply with legal obligations, in the public interest, or in your vital interests, for example, to: detect, prevent, and address activities that we consider could be fraudulent, violations of our Terms of Service or policies, and/or otherwise harmful or unlawful.',
      'We will use appropriate safeguards for transferring your personal data out of the EEA, UK and Switzerland where required and only transfer such personal data under a legally valid transfer mechanism including, where relevant, entering into the EU Standard Contractual Clauses and/or the UK International Data Transfer Agreement / Addendum with the recipient outside the EEA / UK. Please contact us by using the “Submit a request” link here to obtain a copy.',
    ],
  },
  {
    header: 'Changes to This Privacy Policy',
    content:
      'This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy at https://decentralend.com/privacy. The date the Privacy Policy was last revised is identified at the beginning of this Privacy Policy. You are responsible for periodically visiting our Service and this Privacy Policy to check for any changes.',
  },
  {
    header: 'United States Disclosures',
    content:
      'This section applies if you are a resident of California, Colorado or another U.S. state that has a privacy law similar to the California Consumer Privacy Act (“CCPA”). Over the past 12 months, we have collected the following categories of personal information (including sensitive personal information, denoted by *), as described further above in Section 1: (1) identifiers, (2) commercial information, (3) Internet and similar network activity, (4) geolocation data, (5) information derived from other personal information about you and (6) account access credentials*.',
    subSections: [
      'The categories of sources from which the personal information is collected are described above in Section 1.',
      'The business or commercial purpose for collecting and using personal information, and the third parties we have disclosed such information to over the past 12 months, are described above in Sections 2 and 3. We only use and disclose sensitive personal information for the purposes specified in the CCPA or otherwise in line with your consent. We retain information, including sensitive personal information, as long as is reasonably necessary for the purposes described in section 8 above.',
      'The categories of personal information we shared with third parties over the past 12 months, as described above in Section 3, include: (1) identifiers, (2) commercial information, (3) internet and similar network activity, (4) geolocation data, (5) information derived from other personal information about you and (6) account access credentials*.',
      'We do not “sell” or “share” (as those terms are defined under the CCPA) personal information, nor have we done so in the preceding 12 months. Further, we do not have actual knowledge that we sell or share personal information of residents under 16 years of age.',
    ],
  },
  {
    header: 'Questions; Contacting Us; Reporting Violations',
    content:
      'If you have any questions or concerns or complaints about our Privacy Policy or our data collection or processing practices, or if you want to report any security violations to us, please contact us by using the “Submit a request” link here or at the following address: 123 P.O. Box Way, #22014, Mims, FL 32754.',
  },
]

export default function Index() {
  return (
    <>
      <div className="container relative w-4/5 max-w-4xl py-8">
        {/* Title and Updated Time */}
        <h1 className="text-4xl font-extrabold text-black my-6">
          Privacy Policy
        </h1>
        <p className="text-black mb-6">Last updated: October 19, 2024</p>

        {/* Sections */}
        <div className="space-y-6">
          {PRIVACY_CONTENT.map((section: any, index: number) => (
            <div key={index} className="overflow-hidden">
              <h2 className="font-extrabold text-black text-2xl mb-2">
                {section.header}
              </h2>
              <p className="text-black">{section.content}</p>
              {section.list && (
                <ul className="list-disc list-inside text-black mt-2 p-2">
                  {section.list.map((item: any, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
