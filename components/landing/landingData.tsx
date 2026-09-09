'use client'

import type { LucideIcon } from 'lucide-react'
import {
  CalendarClock,
  GitBranch,
  History,
  LockKeyhole,
  Network,
  RefreshCw,
  Send,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react'

type FeatureTuple = [LucideIcon, string, string]
type UseCaseTuple = [LucideIcon, string, string, string[]]

export const proofPoints = [
  'Soroban smart contracts',
  'Stellar Asset Contract support',
  'Freighter and xBull wallet path',
  'Stellar-native treasury operations',
]

export const whatItDoes = [
  [
    'Smart treasury account',
    'A programmable treasury account that enforces treasury rules before payment execution.',
  ],
  [
    'Signer roles and thresholds',
    'Configure operators, admins, guardians, and weighted approvals.',
  ],
  [
    'Asset and recipient policies',
    'Restrict which Stellar assets can move and where they can be sent.',
  ],
  [
    'Scheduled payments',
    'Schedule recurring payments with predefined amounts, recipients, and execution windows.',
  ],
  [
    'Recovery controls',
    'Pause, freeze, guardian approval, delayed recovery, and signer replacement flows.',
  ],
  [
    'Audit trail',
    'Track validation, policy updates, scheduled execution, and recovery events for audit-friendly treasury operations.',
  ],
]

export const coreFeatures: FeatureTuple[] = [
  [
    ShieldCheck,
    'Policy-controlled payments',
    'Approve configured assets, recipients, limits, and execution paths with Soroban and SAC-compatible flows.',
  ],
  [
    Users,
    'Weighted signer approvals',
    'Assign roles and approval weights to treasury participants, then enforce thresholds for sensitive operations.',
  ],
  [
    CalendarClock,
    'Scheduled treasury operations',
    'Schedule recurring payments with predefined amounts, recipients, and execution windows.',
  ],
  [
    LockKeyhole,
    'Recovery and freeze controls',
    'Freeze activity when needed and use guardians with timelocks for recovery workflows.',
  ],
  [
    Wallet,
    'Wallet-first access',
    'Prioritize Freighter and xBull through Stellar Wallets Kit with visible signing flows.',
  ],
  [
    History,
    'Audit-friendly operations',
    'Record events for signer changes, policy changes, payment validation, scheduled execution, and recovery.',
  ],
]

export const useCases: UseCaseTuple[] = [
  [
    Send,
    'Stablecoin vendor and payroll treasury',
    'Replace single-key payments with approved rules for vendors, contributors, and payroll.',
    [
      'Approved recipient lists',
      'Per-asset transfer limits',
      'Signer thresholds',
      'Scheduled payment intents',
    ],
  ],
  [
    GitBranch,
    'Marketplace and platform payouts',
    'Give marketplaces a programmable payout account with limits, replay protection, and auditable execution.',
    [
      'Approved payout recipients',
      'Scheduled or batch intents',
      'Relayer-safe execution',
      'Event-based payout history',
    ],
  ],
  [
    RefreshCw,
    'Tokenization and fund operations',
    'Give tokenization platforms transparent treasury controls for proceeds, fees, and scheduled distributions.',
    [
      'Policy by asset and recipient',
      'Threshold approvals',
      'Scheduled distributions',
      'Recovery safeguards',
    ],
  ],
]

export const stellarTools: FeatureTuple[] = [
  [
    Network,
    'Stellar network',
    'Fast, low-cost settlement for treasury activity.',
  ],
  [ShieldCheck, 'Soroban', 'Programmable account and treasury policy logic.'],
  [
    GitBranch,
    'Stellar Asset Contract',
    'Support for Stellar-native tokenized asset flows.',
  ],
  [
    Wallet,
    'Stellar Wallets Kit',
    'Unified wallet access through Freighter and xBull.',
  ],
]
