export type Features = {
  title: string
  description: string
  items: string[]
}

export type Contribute = {
  title: string
  description: string
  owner: Owner
}

export type Owner = {
  avatar: string
  name: string
  title: string
  twitter: string
}
export type Link = {
  title: string
  href: string
}

export type AppCampaign = {
  id: string
  finished: boolean
  hardGoal: boolean
  account: string
  title: string
  description: string
  overfunding: string
  contribute: Contribute
  features: Features
  raisedPercent: number
  raised: number
  goal: number
  links: Link[]
  disclaimer: string
  startLedger: number
  endLedger: number
}

export const campaigns: AppCampaign[] = [
  {
    id: '1',
    finished: true,
    hardGoal: true,
    account: 'rGtjtHhe21WvPWtANbndjKbhe7ftAGHdVi',
    title: 'Ledger Device Audit # 1',
    description: 'Updating the Ledger Device for the XRP Ledger.',
    overfunding:
      'Extra contributions will support continued development and future audits.',
    contribute: {
      title: 'Contribute Now',
      description:
        'Support the development of advanced features for the Ledger Device.',
      owner: {
        avatar: '/assets/profile.jpeg?height=40&width=40',
        name: 'Denis Angell',
        title: 'Lead Developer',
        twitter: 'https://twitter.com/@angell_denis',
      },
    },
    features: {
      title: 'New Features',
      description: 'Enhancements coming to the XRP Ledger Device:',
      items: [
        'NFToken - Mint, Create Offers, Cancel Offers and Accept Offers',
        'Clawback - Clawback IOU Tokens',
        'AMM - Create Delete, Deposit, Withdraw and Vote on AMM Pools',
      ],
    },
    raisedPercent: 0,
    raised: 0,
    goal: 4850,
    links: [
      {
        title: 'View GitHub PR',
        href: 'https://github.com/LedgerHQ/app-xrp/pull/52',
      },
    ],
    disclaimer:
      'is precisely the cost required for the audit. Due to the confidential nature of the audit, I am unable to share the detailed proposal publicly. Any funds raised beyond the set goal will be allocated towards continued development and funding subsequent audits, which will encompass the latest features added to the Ledger Device.',
    startLedger: 92379621,
    endLedger: 92428456,
  } as AppCampaign,
  {
    id: '2',
    finished: false,
    hardGoal: false,
    account: 'rGtjtHhe21WvPWtANbndjKbhe7ftAGHdVi',
    title: 'Batch Amendment Testing',
    description: 'Testing the Batch amendment on the devnet.',
    overfunding:
      'Extra contributions will support continued development of future amendments.',
    contribute: {
      title: 'Contribute Now',
      description: 'Support the penetration testing of the Batch Amendment.',
      owner: {
        avatar: '/assets/profile.jpeg?height=40&width=40',
        name: 'Denis Angell',
        title: 'Lead Developer',
        twitter: 'https://twitter.com/@angell_denis',
      },
    },
    features: {
      title: 'Testing Details',
      description: 'How it will work:',
      items: [
        'Batch will be merged into the XRPL devent',
        'You must register your testing address first.',
        'Submit Batch transactions using the xrpl.js or xrpl-py.',
        'Payouts are based on the total number of batch transactions submitted by your registered address.',
        'Report any bugs your find for an additional payout.',
      ],
    },
    raisedPercent: 0,
    raised: 0,
    goal: 2000,
    links: [
      {
        title: 'View XLS',
        href: 'https://github.com/XRPLF/XRPL-Standards/blob/master/XLS-0056d-batch/README.md',
      },
      {
        title: 'View GitHub PR',
        href: 'https://github.com/XRPLF/rippled/pull/5060',
      },
      {
        title: 'Register Your Address',
        href: 'https://forms.gle/VQzGGWbEZGFEVtep9',
      },
      {
        title: 'Report A Bug',
        href: 'https://forms.gle/ga41GBNEzkogv6KK8',
      },
    ],
    disclaimer:
      'To participate, you must register your address in advance. Any attempt to artificially inflate transaction counts through automated means may result in disqualification. We reserve the right to determine what constitutes fair participation and to change the rules at any time. Of the total contributions, 20% is reserved for the amendment developer, and 30% is allocated for bugs found during testing. If no bugs are discovered, this 30% will be distributed among the testers. By contributing, you agree to these terms and conditions.',
    startLedger: 92428457,
    endLedger: null,
  } as AppCampaign,
]
