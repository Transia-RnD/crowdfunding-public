import MainLayout from '@/components/templates/Layout'

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export const TERMS_CONTENT = [
  {
    header: 'Introduction',
    content: [
      'Welcome to Decentralend, owned and operated by Transia, LLC. d/b/a Decentralend (“Decentralend,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the Decentralend website(s), our APIs, mobile applications (“App”), and any live support, software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to create, manage, and contribute to crowdfunding campaigns (collectively, the “Service”). “Crowdfunding” in these Terms refers to the process of raising funds from the public through donations for a specific project or cause, without any expectation of equity or ownership in return.',
      'For purposes of these Terms, “user”, “you”, and “your” mean you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.',
      'PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN SECTION 16 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN BY A JUDGE OR JURY IN COURT.',
      'BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.',
    ],
  },
  {
    header: 'Accessing the Service',
    content: [
      'To access the Service, you will need to create an account and provide certain information, including a valid email address. Your account will be associated with your profile, which may include additional information such as a profile picture and a description of your crowdfunding projects.',
      'You acknowledge that all funds raised through the Service are considered donations and do not confer any ownership, equity, or other financial interest in the project or the creator. If a crowdfunding goal is not reached, the funds will still be delivered to the creator of the crowdfunding campaign.',
      'You are solely responsible for ensuring that your crowdfunding campaigns comply with all applicable laws and regulations. Decentralend reserves the right to review and approve campaigns before they are published on the platform.',
      'You agree to immediately notify us if you discover or suspect any security issues related to your account or the Service.',
    ],
  },
  {
    header: 'Ownership',
    content: [
      'The Service, including its “look and feel” (e.g., text, graphics, images, logos, page headers, button icons, urls, and scripts), proprietary content, information and other materials, and all content and other materials contained therein, including, without limitation, the Decentralend logo and all designs, text, graphics, pictures, data, software, sound files, other files, and the selection and arrangement thereof are the proprietary property of Decentralend or our affiliates, licensors, or users, as applicable, and you agree not to take any action(s) inconsistent with such ownership interests.',
      'Decentralend’s name, logo, trademarks, and any Decentralend product or service names, designs, logos, and slogans are the intellectual property of Decentralend or our affiliates or licensors and may not be copied, imitated or used, in whole or in part, without our prior written permission in each instance.',
      'All other third-party trademarks, registered trademarks, and product names mentioned on the Service or contained in the content linked to or associated with any crowdfunding campaigns displayed on the Service are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable intellectual property rights holder.',
    ],
  },
  {
    header: 'License to Access and Use Our Service and Content',
    content: [
      'You are hereby granted a limited, nonexclusive, nontransferable, nonsublicensable, and personal license to access and use the Service provided, however, that such license is subject to your compliance with these Terms. You may not use the Service for any commercial purposes without our prior written consent.',
    ],
  },
  {
    header: 'Third-Party Content, Agreements, and Services',
    content: [
      'As a crowdfunding platform, Decentralend allows users to create and contribute to crowdfunding campaigns. Decentralend does not make any representations or warranties about the legitimacy or success of any crowdfunding campaign, and you bear responsibility for verifying the legitimacy and authenticity of campaigns you choose to support.',
      'These Terms solely govern the use of our Service. Crowdfunding campaigns are created and managed by users, and Decentralend is not responsible for the content or outcome of any campaign. You are responsible for reviewing the terms and conditions associated with each crowdfunding campaign.',
    ],
  },
  {
    header: 'User Conduct',
    content: [
      'You agree that you will not violate any law, contract, intellectual property or other third-party right, and that you are solely responsible for your conduct and content in connection with using the Service. You also agree that you will not:',
      'Create or promote crowdfunding campaigns that are misleading, fraudulent, or violate any applicable laws or regulations;',
      'Use the Service to engage in any unlawful activity or to promote any illegal content;',
      'Impersonate any person or entity or misrepresent your affiliation with any person or entity;',
      'Engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or which, as determined by Decentralend, may harm Decentralend or users of the Service or expose them to liability.',
    ],
  },
  {
    header: 'Intellectual Property Rights',
    content: [
      'You are solely responsible for your use of the Service and for any information you provide, including compliance with applicable laws, rules, and regulations, as well as these Terms.',
      'By using the Service in conjunction with creating, submitting, posting, promoting, or displaying content related to crowdfunding campaigns, you grant us a worldwide, non-exclusive, sublicensable, royalty-free license to use, copy, modify, and display any content that you submit or post on or through the Service for our current and future business purposes.',
      'You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any content that you create, submit, post, promote, or display on or through the Service.',
    ],
  },
  {
    header: 'Communication Preferences',
    content: [
      'By creating an Account, you consent to receive electronic communications from Decentralend (e.g., via email, push notification, text messages, or other types of messages). These communications may include notices about your Account (e.g., transactional information) and are part of your relationship with us. We may also send you promotional communications via email we think will be of interest to you. You understand that you are not required to provide this consent as a condition of using the Service and you may opt out of these communications through the Service or through your mobile device’s operating system.',
    ],
  },
  {
    header: 'Indemnification',
    content: [
      'By agreeing to these Terms and accessing the Service, you agree, to the fullest extent permitted by applicable law, to indemnify, defend, and hold harmless Decentralend, and our respective past, present, and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors, and assigns (individually and collectively, the “Decentralend Parties”), from and against all actual or alleged claims, damages, awards, judgments, losses, liabilities, obligations, taxes, penalties, interest, fees, expenses (including, without limitation, attorneys’ fees and expenses), and costs (including, without limitation, court costs, costs of settlement, and costs of pursuing indemnification and insurance), of every kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract, or otherwise (collectively, “Claims”), including, but not limited to, damages to property or personal injury, that are caused by, arise out of or are related to (a) your use or misuse of the Service, content, or crowdfunding campaigns; (b) any Feedback you provide; (c) your violation or breach of any term of these Terms or applicable law; and (d) your violation of the rights of or obligations to a third party, including another user or third party.',
    ],
  },
  {
    header: 'Disclaimers',
    content: [
      'YOUR ACCESS TO AND USE OF THE SERVICE IS AT YOUR OWN RISK. YOU UNDERSTAND AND AGREE THAT THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND Decentralend EXPRESSLY DISCLAIMS WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. Decentralend (AND ITS SUPPLIERS) MAKE NO WARRANTY OR REPRESENTATION AND DISCLAIM ALL RESPONSIBILITY FOR WHETHER THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.',
      'Decentralend WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE SERVICE. WHILE Decentralend ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SERVICE SAFE, Decentralend CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, OR ANY CAMPAIGNS YOU INTERACT WITH USING OUR SERVICE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.',
    ],
  },
  {
    header: 'Assumption of Risk',
    content: [
      'You accept and acknowledge:',
      'The value of a crowdfunding campaign is subjective. You acknowledge that you fully understand this subjectivity and that you may lose money if you choose to contribute to a campaign.',
      'You understand that you are responsible for any fees related to your contributions, and that such fees are final and irreversible.',
      'You are solely responsible for determining what, if any, taxes apply to your contributions and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. Decentralend is not responsible for determining, withholding, collecting, reporting, or remitting any taxes that apply to your contributions.',
      'You represent and warrant that you have done sufficient research before making any decisions to contribute to any crowdfunding campaign.',
    ],
  },
  {
    header: 'Limitation of Liability',
    content: [
      'TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AGREE THAT IN NO EVENT WILL Decentralend OR ITS SERVICE PROVIDERS BE LIABLE TO YOU OR ANY THIRD PARTY (A) FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM THESE TERMS OR THE SERVICE, PRODUCTS OR THIRD-PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND WHETHER CAUSED BY STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF Decentralend OR ITS SERVICE PROVIDERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; OR (B) FOR ANY OTHER CLAIM, DEMAND, OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF THE DELIVERY, USE, OR PERFORMANCE OF THE SERVICE.',
      'NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF Decentralend ARISING OUT OF OR IN ANY WAY RELATED TO THESE TERMS, THE ACCESS TO AND USE OF THE SERVICE, CONTENT, OR ANY Decentralend PRODUCTS OR SERVICES EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT RECEIVED BY Decentralend FOR ITS SERVICE TO YOU DIRECTLY RELATING TO THE ITEMS THAT ARE THE SUBJECT OF THE CLAIM.',
    ],
  },
  {
    header: 'Privacy Policy',
    content: [
      'Please refer to our Privacy Policy for information about how we collect, use, and share information from and/or about you ("Your Information"). By submitting Your Information through our Service, you agree to the terms of our Privacy Policy and you expressly consent to the collection, use, and disclosure of Your Information in accordance with the Privacy Policy.',
    ],
  },
  {
    header: 'Modifications to the Service',
    content: [
      'We reserve the right in our sole discretion to modify, suspend, or discontinue, temporarily or permanently, the Service (or any features or parts thereof) at any time and without liability as a result.',
    ],
  },
  {
    header: 'Dispute Resolution; Arbitration',
    content: [
      'Dispute Resolution. Please read the following arbitration agreement in this Section (“Arbitration Agreement”) carefully. It requires you to arbitrate disputes with Decentralend and limits the manner in which you can seek relief from us. This section does not govern disputes between users or between users and third parties. Decentralend does not provide dispute resolution services for such disagreements and the parties must resolve those disputes directly.',
      'Applicability of Arbitration Agreement. You agree that any dispute, controversy, or claim relating in any way to your access or use of the Service, to any products sold or distributed through the Service, or to any aspect of your relationship with Decentralend, will be resolved by binding arbitration, rather than in court, including threshold questions of the arbitrability of such dispute, controversy, or claim except that (1) you or Decentralend may assert claims in small claims court, but only if the claims qualify, the claims remain only in such court, and the claims remain on an individual, non-representative, and non-class basis; and (2) you or Decentralend may seek injunctive or equitable relief in a court of proper jurisdiction if the claim relates to intellectual property infringement or other misuse of intellectual property rights.',
      'Dispute resolution process. You and Decentralend both agree to engage in good-faith efforts to resolve disputes prior to either party initiating an arbitration, small claims court proceeding, or equitable relief for intellectual property infringement. You must initiate this dispute resolution process by sending a letter describing the nature of your claim and desired resolution to: Decentralend, Attn: Legal Department, 228 Park Avenue South, #22014, New York, NY 10003. Both parties agree to meet and confer personally, by telephone, or by videoconference (hereinafter “Conference”) to discuss the dispute and attempt in good faith to reach a mutually beneficial outcome that avoids the expenses of arbitration or, where applicable, litigation.',
      'Arbitration Rules and Forum. The Federal Arbitration Act governs the interpretation and enforcement of this Arbitration Agreement. To begin an arbitration proceeding after participating in the dispute resolution process, you must send a letter requesting arbitration and describing your claim to our registered agent at Decentralend, Attn: Legal Department, 228 Park Avenue South, #22014, New York, NY 10003. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider.',
      'Authority of Arbitrator. The arbitrator shall have exclusive authority to (a) determine the scope and enforceability of this Arbitration Agreement and (b) resolve any dispute related to the interpretation, applicability, enforceability, or formation of this Arbitration Agreement including, but not limited to, any claim that all or any part of this Arbitration Agreement is void or voidable.',
      'Waiver of Jury Trial. YOU AND Decentralend HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and Decentralend are instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.',
      'Waiver of Class Actions and Class Arbitrations. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A REPRESENTATIVE (INCLUDING, WITHOUT LIMITATION, PAGA) OR COLLECTIVE CLASS BASIS.',
    ],
  },
  {
    header: 'Governing Law and Venue',
    content: [
      'These Terms and your access to and use of the Service shall be governed by and construed and enforced in accordance with the laws of the State of New York (without regard to conflict of law rules or principles of the State of New York, or any other jurisdiction that would cause the application of the laws of any other jurisdiction). Any dispute between the parties that is not subject to arbitration as set forth in Section 16 or cannot be heard in small claims court, shall be resolved in the state or federal courts of New York County in the State of New York, and the United States, respectively, sitting in the State of New York.',
    ],
  },
  {
    header: 'Termination',
    content: [
      'If you breach any of the provisions of these Terms, all licenses granted by Decentralend will terminate automatically. Additionally, notwithstanding anything contained in these Terms, we reserve the right, with or without notice and in our sole discretion, to suspend, restrict, disable, terminate, or delete your Account and/or your ability to access or use the Service (or any part of the foregoing) at any time and for any or no reason, and you acknowledge and agree that we shall have no liability or obligation to you in such event and that you will not be entitled to a refund of any amounts that you have already paid to us.',
    ],
  },
  {
    header: 'Severability',
    content: [
      'If any term, clause, or provision of these Terms is held invalid or unenforceable, then that term, clause, or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause, or provision, or any other term, clause, or provision of these Terms.',
    ],
  },
  {
    header: 'Injunctive Relief',
    content: [
      'You agree that a breach of these Terms will cause irreparable injury to Decentralend for which monetary damages would not be an adequate remedy and Decentralend shall be entitled to equitable relief in addition to any remedies it may have hereunder or at law without a bond, other security, or proof of damages.',
    ],
  },
  {
    header: 'California Residents',
    content: [
      'If you are a California resident, in accordance with Cal. Civ. Code § 1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210.',
    ],
  },
  {
    header: 'Export Laws',
    content: [
      'You agree that you will not export or re-export, directly or indirectly, the Service, and/or other information or materials provided by Decentralend hereunder, to any country for which the United States or any other relevant jurisdiction requires any export license or other governmental approval at the time of export without first obtaining such license or approval.',
    ],
  },
  {
    header: 'Survival',
    content: [
      'All sections which by their nature should survive the termination of these Terms shall continue in full force and effect subsequent to and notwithstanding any termination of these Terms by Decentralend or you. Termination will not limit any of Decentralend’s other rights or remedies at law or in equity.',
    ],
  },
  {
    header: 'Miscellaneous',
    content: [
      'These Terms (and any other applicable terms or policies incorporated by reference in these Terms) constitute the entire agreement between you and Decentralend relating to your access to and use of the Service. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the prior written consent of Decentralend, and Decentralend’s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.',
      'The Service is operated by us in the United States. Those who choose to access the Service from locations outside the United States do so at their own initiative and are responsible for compliance with applicable local laws. You and Decentralend agree that the United Nations Convention on Contracts for the International Sale of Goods will not apply to the interpretation or construction of these Terms.',
      'Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity.',
    ],
  },
]

export default function Index() {
  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: 'cover',
        }}
      />
      <div className="container relative w-4/5 max-w-4xl py-8">
        {/* Title and Updated Time */}
        <h1 className="text-4xl font-extrabold text-black my-6">
          Terms And Conditions
        </h1>
        <p className="text-black mb-6">Last updated: October 19, 2024</p>

        {/* Sections */}
        <div className="space-y-6">
          {TERMS_CONTENT.map((section: any, index: number) => (
            <div key={index} className="overflow-hidden">
              <h2 className="font-extrabold text-black text-2xl mb-2">
                {section.header}
              </h2>
              {section.content.map((content: any, idx: number) => (
                <p key={idx} className="text-black my-6">
                  {content}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
