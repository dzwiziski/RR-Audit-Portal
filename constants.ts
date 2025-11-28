
import { AuditItem } from './types';

export const AUDIT_DATA: AuditItem[] = [
  // --- STRATEGY & OPERATIONS ---
  // Strategy & Go To Market
  { id: 'so_sgtm_1', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Pricing/Packaging Optimized' },
  { id: 'so_sgtm_2', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'TAM/SAM/SOM Defined and Documented' },
  { id: 'so_sgtm_3', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'ICP/Value Proposition/Buyer Personas Established and Iterated Quarterly' },
  { id: 'so_sgtm_4', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Market Positioning Statement and Differentiation Clear' },
  { id: 'so_sgtm_5', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Clear Revenue Org Chart Including JTBD and Responsibilities' },
  { id: 'so_sgtm_6', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Cross-functional Alignment Between Teams' },
  { id: 'so_sgtm_7', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Org Wide Goal Setting Framework in Place (OKRs or Similar)' },
  { id: 'so_sgtm_8', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Top 3 Company Priorities Identified with Tough Choices Made' },
  { id: 'so_sgtm_9', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Compensation Philosophy Determined and Aligned with Company Goals' },
  { id: 'so_sgtm_10', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Everyone Can Describe "What You Do" in < 30 Seconds' },
  { id: 'so_sgtm_11', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Buyer\'s Journey Mapped (Stages Aligned with Internal Processes)' },
  { id: 'so_sgtm_12', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'GTM Motion Defined (PLG, Sales-Led, Partner-Led, Hybrid)' },
  { id: 'so_sgtm_13', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Competitive Landscape Mapped and Monitored' },
  { id: 'so_sgtm_14', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Product-Market Fit Metrics Tracked' },
  { id: 'so_sgtm_15', category: 'Strategy & Operations', subCategory: 'Strategy & Go To Market', question: 'Go-to-Market Segmentation Strategy (Enterprise vs SMB vs Mid-Market)' },

  // Business Operations
  { id: 'so_bo_1', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Complete Top-Down Revenue Model' },
  { id: 'so_bo_2', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Complete Bottoms-Up Revenue Model' },
  { id: 'so_bo_3', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'CAC and LTV Documented and Understood' },
  { id: 'so_bo_4', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Churn Analysis and Prevention Strategy' },
  { id: 'so_bo_5', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Contract Standards Established (SLAs, Insurance, DPA, etc.) and Published' },
  { id: 'so_bo_6', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Baseline Security Documentation Established and Available (If Required)' },
  { id: 'so_bo_7', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'GC Resource/Deal Desk Established/Reporting Available' },
  { id: 'so_bo_8', category: 'Strategy & Operations', subCategory: 'Business Operations', question: 'Receivables Process in Place' },

  // Revenue Operations
  { id: 'so_ro_1', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Discounting Guidelines Established' },
  { id: 'so_ro_2', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Contract Modification Escalation Procedures Established' },
  { id: 'so_ro_3', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Deal Review Process and Cadence Established' },
  { id: 'so_ro_4', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Weighted Pipeline Methodology in Place and Tracked' },
  { id: 'so_ro_5', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Pipeline Velocity Reporting in Place' },
  { id: 'so_ro_6', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Sales Process Designed and Mapped to CRM' },
  { id: 'so_ro_7', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Sales and Marketing SLA Documented' },
  { id: 'so_ro_8', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Inbound Lead Process Established and Routing Configured' },
  { id: 'so_ro_9', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Lead Routing and Assignment Rules Automated' },
  { id: 'so_ro_10', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Territory Planning and Assignment Process' },
  { id: 'so_ro_11', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'CRM Configured & Connected to Marketing Automation and Sales' },
  { id: 'so_ro_12', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Tech Stack Audit/Satisfaction Review Conducted' },
  { id: 'so_ro_13', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Data Hygiene Program in Place (Audits, Appropriate User Permissions)' },
  { id: 'so_ro_14', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Key CRM GTM Dashboards and Reports in Place' },
  { id: 'so_ro_15', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'CRM Roles and Permissions in Place' },
  { id: 'so_ro_16', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Revenue Ops Playbook and/or Rules of Engagement/SLAs Established' },
  { id: 'so_ro_17', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Forecasting Accuracy/Methodology Documented' },
  { id: 'so_ro_18', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Funnel Conversion Rates Available by Stage' },
  { id: 'so_ro_19', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Commission Tracking and Disputes Process' },
  { id: 'so_ro_20', category: 'Strategy & Operations', subCategory: 'Revenue Operations', question: 'Finance Generated Flash Report at End of Month' },

  // --- MARKETING ---
  // Demand Generation
  { id: 'mkt_dg_1', category: 'Marketing', subCategory: 'Demand Generation', question: 'Verticalized and Segmented Demand Strategy with Revenue Targets' },
  { id: 'mkt_dg_2', category: 'Marketing', subCategory: 'Demand Generation', question: 'KPIs and Conversion Optimization Goals for CPL, CPA' },
  { id: 'mkt_dg_3', category: 'Marketing', subCategory: 'Demand Generation', question: 'Keyword Strategy Documented and Updated' },
  { id: 'mkt_dg_4', category: 'Marketing', subCategory: 'Demand Generation', question: 'Paid Media Program Actively and Accurately Managed with Experimentation' },
  { id: 'mkt_dg_5', category: 'Marketing', subCategory: 'Demand Generation', question: 'SEO and SEM Structure and Optimization' },
  { id: 'mkt_dg_6', category: 'Marketing', subCategory: 'Demand Generation', question: 'Nurturing Campaigns Designed & Deployed' },
  { id: 'mkt_dg_7', category: 'Marketing', subCategory: 'Demand Generation', question: 'Lead Form Strategy' },
  { id: 'mkt_dg_8', category: 'Marketing', subCategory: 'Demand Generation', question: 'Omni-Channel (Webinar, Social, Paid, Podcast, etc.) Program in Place' },
  { id: 'mkt_dg_9', category: 'Marketing', subCategory: 'Demand Generation', question: 'Lead Scoring Framework' },
  { id: 'mkt_dg_10', category: 'Marketing', subCategory: 'Demand Generation', question: 'Campaign Program in Place for Content Launches' },
  { id: 'mkt_dg_11', category: 'Marketing', subCategory: 'Demand Generation', question: 'Marketing Contribution to Pipeline & Revenue Established' },
  { id: 'mkt_dg_12', category: 'Marketing', subCategory: 'Demand Generation', question: 'Marketing Compensated on Pipeline Contribution' },
  { id: 'mkt_dg_13', category: 'Marketing', subCategory: 'Demand Generation', question: 'Marketing Conducting Consistent Win/Loss Reviews' },
  { id: 'mkt_dg_14', category: 'Marketing', subCategory: 'Demand Generation', question: 'Defined MQL and Lead Stage Definitions with Scoring in Place' },

  // Content Marketing
  { id: 'mkt_cm_1', category: 'Marketing', subCategory: 'Content Marketing', question: 'TOFU, MOFU, BOFU Content Strategy' },
  { id: 'mkt_cm_2', category: 'Marketing', subCategory: 'Content Marketing', question: 'Content Platform Launched' },
  { id: 'mkt_cm_3', category: 'Marketing', subCategory: 'Content Marketing', question: 'Sales Enablement Materials Developed for Each Stage of Funnel' },
  { id: 'mkt_cm_4', category: 'Marketing', subCategory: 'Content Marketing', question: 'Library of Company Stats and FAQs' },
  { id: 'mkt_cm_5', category: 'Marketing', subCategory: 'Content Marketing', question: 'Case Studies with Outcomes' },
  { id: 'mkt_cm_6', category: 'Marketing', subCategory: 'Content Marketing', question: 'Competitive Battlecards in Place and Reviewed Quarterly' },
  { id: 'mkt_cm_7', category: 'Marketing', subCategory: 'Content Marketing', question: 'Centralized and Accessible Content Library' },
  { id: 'mkt_cm_8', category: 'Marketing', subCategory: 'Content Marketing', question: 'Content Mapped to Stages and Organized in Library for Sales Effectiveness' },
  { id: 'mkt_cm_9', category: 'Marketing', subCategory: 'Content Marketing', question: 'Content Metrics in Place and Regularly Measured' },
  { id: 'mkt_cm_10', category: 'Marketing', subCategory: 'Content Marketing', question: 'Content Partnerships in Place' },

  // Events, Brand, Comms
  { id: 'mkt_eb_1', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Company-Owned Events Program in Place' },
  { id: 'mkt_eb_2', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Trade Show and Conference Program with Revenue & Lead Goals' },
  { id: 'mkt_eb_3', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Marketing Braintrust Established' },
  { id: 'mkt_eb_4', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Customer/Community Marketing Initiatives (Ex. Customer Advisory Board)' },
  { id: 'mkt_eb_5', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Comms & PR Strategy Developed' },
  { id: 'mkt_eb_6', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Strategic Branding Exercise Completed with Brand Script/Story' },
  { id: 'mkt_eb_7', category: 'Marketing', subCategory: 'Events, Brand, Comms, and Customer Marketing', question: 'Documented Brand Book/Guidelines' },

  // --- SALES ---
  // Sales Roles & Compensation
  { id: 'sal_rc_1', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Team Structure in Place and Optimized' },
  { id: 'sal_rc_2', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Comp Plans & Incentives Designed to Drive Behavior' },
  { id: 'sal_rc_3', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Managers in Place with Proper Scope' },
  { id: 'sal_rc_4', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Sales Support/Pre-Sales/Sales Engineering Comp Aligned with Sales Growth' },
  { id: 'sal_rc_5', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Clear Role Definition for SDRs, AEs, AMs' },
  { id: 'sal_rc_6', category: 'Sales', subCategory: 'Sales Roles & Compensation', question: 'Hiring Profiles and Interview Scorecards in Place' },

  // Sales Development
  { id: 'sal_sd_1', category: 'Sales', subCategory: 'Sales Development', question: 'Sales Development Playbook Established' },
  { id: 'sal_sd_2', category: 'Sales', subCategory: 'Sales Development', question: 'Sales Development Territories Established' },
  { id: 'sal_sd_3', category: 'Sales', subCategory: 'Sales Development', question: 'Multi-Channel Outbound Strategy in Place' },
  { id: 'sal_sd_4', category: 'Sales', subCategory: 'Sales Development', question: 'Sequencing Decisions and Direction Led by A/B Testing' },
  { id: 'sal_sd_5', category: 'Sales', subCategory: 'Sales Development', question: 'Collaborative Approach to Development Messaging with Reps Engaged' },

  // Sales Enablement
  { id: 'sal_se_1', category: 'Sales', subCategory: 'Sales Enablement', question: 'Playbooks and Talk Tracks in Place' },
  { id: 'sal_se_2', category: 'Sales', subCategory: 'Sales Enablement', question: 'Discovery Training - Proper Strategic Questioning and Layering' },
  { id: 'sal_se_3', category: 'Sales', subCategory: 'Sales Enablement', question: 'Story-Based Pre-Demo Deck and Training' },
  { id: 'sal_se_4', category: 'Sales', subCategory: 'Sales Enablement', question: 'Mutual Action Plans Developed' },
  { id: 'sal_se_5', category: 'Sales', subCategory: 'Sales Enablement', question: 'Sales Methodology in Place and Integrated with CRM' },
  { id: 'sal_se_6', category: 'Sales', subCategory: 'Sales Enablement', question: 'Contracting Friction Points Known with Rebuttals/Talk Tracks' },
  { id: 'sal_se_7', category: 'Sales', subCategory: 'Sales Enablement', question: 'Win/Loss Analysis Process in Place' },
  { id: 'sal_se_8', category: 'Sales', subCategory: 'Sales Enablement', question: 'AE/SDR Handoff Process Documented' },
  { id: 'sal_se_9', category: 'Sales', subCategory: 'Sales Enablement', question: 'Reading & Outside Resources Distributed' },

  // Sales Management
  { id: 'sal_sm_1', category: 'Sales', subCategory: 'Sales Management', question: 'Sales Management Coaching and Training in Place' },
  { id: 'sal_sm_2', category: 'Sales', subCategory: 'Sales Management', question: 'Structured Weekly 1x1s with Pipeline Review' },
  { id: 'sal_sm_3', category: 'Sales', subCategory: 'Sales Management', question: 'Territory/Assigned Accounts Strategy' },
  { id: 'sal_sm_4', category: 'Sales', subCategory: 'Sales Management', question: 'Call Coaching & Call Review Program' },
  { id: 'sal_sm_5', category: 'Sales', subCategory: 'Sales Management', question: 'Sales Manager Playbook in Place' },
  { id: 'sal_sm_6', category: 'Sales', subCategory: 'Sales Management', question: 'Sales Management Comp Incentivizes Balanced Team Development' },
  { id: 'sal_sm_7', category: 'Sales', subCategory: 'Sales Management', question: 'Clear Career Pathing in Place for Development' },
  { id: 'sal_sm_8', category: 'Sales', subCategory: 'Sales Management', question: 'Management Expectations Set and Documented' },
  { id: 'sal_sm_9', category: 'Sales', subCategory: 'Sales Management', question: 'Sales Forecasting Methodology by Rep' },

  // Motivation & Recog
  { id: 'sal_mr_1', category: 'Sales', subCategory: 'Motivation, Competition & Recognition', question: 'Monthly/Quarterly Sales Kickoff with Key Targets Distributed' },
  { id: 'sal_mr_2', category: 'Sales', subCategory: 'Motivation, Competition & Recognition', question: 'Team Happy Hours & Celebrations with Approved Autonomous Budget' },
  { id: 'sal_mr_3', category: 'Sales', subCategory: 'Motivation, Competition & Recognition', question: 'Competitions/SPIFFs for Non-Revenue Outputs (Leads, Meetings, Pipeline)' },
  { id: 'sal_mr_4', category: 'Sales', subCategory: 'Motivation, Competition & Recognition', question: 'Top Performer Recognition and Incentives' },

  // Partner
  { id: 'sal_pc_1', category: 'Sales', subCategory: 'Partner & Channel Program', question: 'Channel Partner Program Established' },
  { id: 'sal_pc_2', category: 'Sales', subCategory: 'Partner & Channel Program', question: 'Partner Enablement Materials and Training' },
  { id: 'sal_pc_3', category: 'Sales', subCategory: 'Partner & Channel Program', question: 'Partner Compensation and Incentive Structure' },
  { id: 'sal_pc_4', category: 'Sales', subCategory: 'Partner & Channel Program', question: 'Partner Performance Metrics and Reporting' },
  { id: 'sal_pc_5', category: 'Sales', subCategory: 'Partner & Channel Program', question: 'Co-Marketing Programs with Partners' },

  // Cadence
  { id: 'sal_mc_1', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Weekly Meeting Kickoff and Friday Wrap-Up' },
  { id: 'sal_mc_2', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Daily Huddles' },
  { id: 'sal_mc_3', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Weekly, Monthly Commitments and Review Against Goals' },
  { id: 'sal_mc_4', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Weekly Email Week in Review' },
  { id: 'sal_mc_5', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Team Knows Key Monthly & Quarterly Goals' },
  { id: 'sal_mc_6', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Teamwide Meeting with Cross-Functional Participation' },
  { id: 'sal_mc_7', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Other Departments Reporting Out to Sales' },
  { id: 'sal_mc_8', category: 'Sales', subCategory: 'Meeting Cadence and Team Dynamics', question: 'Company Wide Comms in Place Including Revenue Reporting' },

  // --- CUSTOMER SUCCESS ---
  // Ops & Strategy
  { id: 'cs_os_1', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'CS Actively Incorporated into Sales Conversations' },
  { id: 'cs_os_2', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'Clear Ownership and Metrics Defined for Renewals' },
  { id: 'cs_os_3', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'Renewal Forecasting Process Established' },
  { id: 'cs_os_4', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'Customer Health Scoring System in Place' },
  { id: 'cs_os_5', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'Defined Risk Scoring and CS Engagement Strategy' },
  { id: 'cs_os_6', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'Churn Prediction and Prevention Program' },
  { id: 'cs_os_7', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'GRR/NRR Reporting in Place' },
  { id: 'cs_os_8', category: 'Customer Success', subCategory: 'CS Operations & Strategy', question: 'CS Tech Stack Separate from Sales Tools' },

  // Onboarding
  { id: 'cs_oa_1', category: 'Customer Success', subCategory: 'Onboarding & Adoption', question: 'Onboarding Process Documented' },
  { id: 'cs_oa_2', category: 'Customer Success', subCategory: 'Onboarding & Adoption', question: 'Onboarding with Adoption Indicators in Place' },
  { id: 'cs_oa_3', category: 'Customer Success', subCategory: 'Onboarding & Adoption', question: 'Easy Access to Product Adoption/Utilization Reporting' },
  { id: 'cs_oa_4', category: 'Customer Success', subCategory: 'Onboarding & Adoption', question: 'Customer Journey Mapping Completed' },

  // Retention
  { id: 'cs_re_1', category: 'Customer Success', subCategory: 'Retention & Expansion', question: 'Expansion Playbooks in Use' },
  { id: 'cs_re_2', category: 'Customer Success', subCategory: 'Retention & Expansion', question: 'Expansion/Upsell Playbook Specific to CS' },
  { id: 'cs_re_3', category: 'Customer Success', subCategory: 'Retention & Expansion', question: 'Budget Established for In-Person Meetings' },
  { id: 'cs_re_4', category: 'Customer Success', subCategory: 'Retention & Expansion', question: 'Team Oriented and Goaled Around Revenue Retention and Expansion' },
  { id: 'cs_re_5', category: 'Customer Success', subCategory: 'Retention & Expansion', question: 'Referral Program in Place' },

  // Health
  { id: 'cs_he_1', category: 'Customer Success', subCategory: 'Customer Health & Engagement', question: 'NPS Program in Place' },
  { id: 'cs_he_2', category: 'Customer Success', subCategory: 'Customer Health & Engagement', question: 'CSAT Program in Place' },
  { id: 'cs_he_3', category: 'Customer Success', subCategory: 'Customer Health & Engagement', question: 'QBR Program in Place' },
  { id: 'cs_he_4', category: 'Customer Success', subCategory: 'Customer Health & Engagement', question: 'Executive Sponsor Program for Top Customers with In-Person Visits' },
  { id: 'cs_he_5', category: 'Customer Success', subCategory: 'Customer Health & Engagement', question: 'Customer Advisory Group in Place' },

  // --- PEOPLE OPERATIONS ---
  // Culture
  { id: 'ppl_c_1', category: 'People Operations', subCategory: 'Culture', question: 'Mission-Driven with Motivation Extending Beyond Compensation' },
  { id: 'ppl_c_2', category: 'People Operations', subCategory: 'Culture', question: 'Strong Work Ethic and Accountability Culture' },
  { id: 'ppl_c_3', category: 'People Operations', subCategory: 'Culture', question: 'Avoiding a "Not My Job" Culture' },
  { id: 'ppl_c_4', category: 'People Operations', subCategory: 'Culture', question: 'Building a "We\'re Enabling Paychecks" Culture' },
  { id: 'ppl_c_5', category: 'People Operations', subCategory: 'Culture', question: 'Building an "Everyone Owns Revenue" Culture' },
  { id: 'ppl_c_6', category: 'People Operations', subCategory: 'Culture', question: 'Deal Review Process - How the Deal was Done Company-Wide' },
  { id: 'ppl_c_7', category: 'People Operations', subCategory: 'Culture', question: 'Meetings Start on Time, End on Time, and Properly Managed' },
  { id: 'ppl_c_8', category: 'People Operations', subCategory: 'Culture', question: 'Clear Direct Communication Standards' },
  { id: 'ppl_c_9', category: 'People Operations', subCategory: 'Culture', question: 'Direct Feedback Culture Established' },

  // Hiring
  { id: 'ppl_hr_1', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Hiring Profile Established' },
  { id: 'ppl_hr_2', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Standardized Interview Process' },
  { id: 'ppl_hr_3', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Scoring System Established for Candidates' },
  { id: 'ppl_hr_4', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Onboarding Program with 2-Week Calendar Designed' },
  { id: 'ppl_hr_5', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Ramp Program Established (Less Than Two Sales Cycles)' },
  { id: 'ppl_hr_6', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Identified Sales Recruiting Resources (Internal or External)' },
  { id: 'ppl_hr_7', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Employer Brand Building Programs in Place' },
  { id: 'ppl_hr_8', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Goals Set for Recruiting and Candidate Experience' },
  { id: 'ppl_hr_9', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Revenue Compensation Philosophy Documented' },
  { id: 'ppl_hr_10', category: 'People Operations', subCategory: 'Hiring & Recruiting', question: 'Attrition/Turnover Metrics Tracking' },

  // Key Hires
  { id: 'ppl_kh_1', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Revenue Operations Manager' },
  { id: 'ppl_kh_2', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Demand Generation Manager' },
  { id: 'ppl_kh_3', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'SDR Manager' },
  { id: 'ppl_kh_4', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Content Marketing Manager' },
  { id: 'ppl_kh_5', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Product Marketing Manager' },
  { id: 'ppl_kh_6', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Marketing Dedicated Design' },
  { id: 'ppl_kh_7', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Director of Sales' },
  { id: 'ppl_kh_8', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Salesforce/CRM Admin/Resources' },
  { id: 'ppl_kh_9', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Sales Enablement Manager' },
  { id: 'ppl_kh_10', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Account Executive 1' },
  { id: 'ppl_kh_11', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Account Executive 2' },
  { id: 'ppl_kh_12', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Account Executive 3' },
  { id: 'ppl_kh_13', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Director, Revenue Marketing' },
  { id: 'ppl_kh_14', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'VP, Marketing' },
  { id: 'ppl_kh_15', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'VP, Sales' },
  { id: 'ppl_kh_16', category: 'People Operations', subCategory: 'Key Hires & Quality', question: 'Chief Customer Officer' },
];

export const CATEGORIES = Array.from(new Set(AUDIT_DATA.map(item => item.category)));
