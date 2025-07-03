import type { FormData } from '../types/form';

export const createTestFormData = (): FormData => ({
  // Personal Information
  fullName: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  
  // Section 1: Excellence & Accountability
  role1_company: 'TechCorp Solutions',
  role1_title: 'Senior Product Manager',
  role1_duration: '2022-2024',
  role1_rating: 9,
  role1_supervisor: 'Michael Chen, VP of Product',
  role1_scope: 'Led AI-powered analytics platform serving 50K+ users, managed cross-functional team of 12, drove 40% revenue growth through strategic feature development and user experience optimization.',
  
  role2_company: 'InnovateTech Inc',
  role2_title: 'Product Manager',
  role2_duration: '2020-2022',
  role2_scope: 'Managed mobile app development lifecycle, coordinated with engineering and design teams, launched 3 major features that increased user engagement by 25%.',
  role2_rating: 8,
  role2_supervisor: 'Jennifer Liu, Director of Product',
  
  role3_company: 'StartupXYZ',
  role3_title: 'Associate Product Manager',
  role3_duration: '2018-2020',
  role3_rating: 7,
  role3_supervisor: 'David Rodriguez, Head of Product',
  role3_scope: 'Supported product roadmap planning, conducted user research, analyzed metrics and KPIs, assisted in feature prioritization for B2C marketplace platform.',
  
  reference_check_consent: 'Yes, all three',
  reference_check_explanation: '',
  
  // Section 2: Technical & Domain Expertise
  ai_arch_rating: 8,
  ai_arch_recent_experience: 'AI-Powered Recommendation Engine - Q3 2023',
  ai_arch_models_frameworks: 'OpenAI GPT-4, TensorFlow, PyTorch, Hugging Face Transformers, LangChain',
  
  b2c_growth_rating: 9,
  b2c_growth_best_achievement: 'Scaled user base from 10K to 500K MAU in 18 months through viral referral program and strategic partnerships, achieving 35% month-over-month growth',
  b2c_growth_largest_userbase: '500,000 monthly active users',
  
  mobile_rating: 8,
  mobile_apps_launched: 4,
  mobile_downloads: '2.5 million combined downloads',
  
  privacy_rating: 7,
  privacy_challenge: 'Implemented end-to-end encryption for messaging platform while maintaining search functionality and user experience. Required custom cryptographic solution and extensive security audits.',
  privacy_compliance_experience: 'GDPR, CCPA, SOC2 Type II, ISO27001 implementation experience',
  
  // Section 3: Execution & Impact
  beta_product: 'AI Personal Assistant',
  beta_company: 'TechCorp Solutions',
  beta_participants: 2500,
  beta_metrics: 'DAU, Retention Rate, Task Completion Rate, User Satisfaction Score, Feature Adoption Rate, Churn Rate, Session Duration, Error Rate, Response Time, Conversion Rate',
  beta_pivot: 'Shifted from voice-first to text-first interface after discovering 78% of users preferred typing over speaking in professional environments. This change increased daily usage by 45%.',
  beta_involvement: 'Led end-to-end beta program as Product Manager, coordinated with engineering, design, and data teams, managed participant recruitment, feedback collection, and iterative improvements.',
  
  prioritization_privacy: 30,
  prioritization_ai: 25,
  prioritization_ux: 20,
  prioritization_growth: 15,
  prioritization_revenue: 10,
  prioritization_explanation: 'Privacy is foundational to user trust and long-term success. AI capabilities drive core value proposition. UX ensures adoption and retention. Growth features amplify reach. Revenue generation supports sustainability but should not compromise user experience or privacy.',
  
  scenario_response: 'I would start by conducting rapid user interviews to understand the core pain point. Then create a lightweight prototype to test the hypothesis with a small user group. Based on feedback, I would develop an MVP focusing on the most critical user journey. I would establish clear success metrics, implement analytics, and plan for iterative improvements based on user behavior data.',
  
  // Section 4: Vision Alignment
  transformative_thinking: 'The future of personal AI isn\'t about replacing human intelligence, it\'s about amplifying human potential while preserving individual autonomy and privacy.',
  sovereignty_philosophy: 'Users should have complete control over their data, AI models, and digital interactions. True sovereignty means the ability to own, modify, and transfer your digital intelligence without platform dependency or vendor lock-in.',
  competitive_differentiation: 'MyVault will succeed by prioritizing user sovereignty over platform control, building trust through transparency, and creating genuine value through AI that serves users rather than exploiting them for data.',
  
  // Section 5: Practical Assessment
  impact_plan_1: 'Conduct comprehensive user research and competitive analysis to identify key differentiators and user pain points',
  impact_plan_2: 'Develop detailed product roadmap with clear milestones, success metrics, and resource requirements',
  impact_plan_3: 'Establish cross-functional collaboration processes and communication frameworks with engineering and design teams',
  
  critical_q1: 'What are the top 3 technical risks that could prevent us from achieving our AI sovereignty vision, and how do we mitigate them?',
  critical_q2: 'How do we balance user privacy with the data requirements needed to train and improve our AI models?',
  critical_q3: 'What is our go-to-market strategy for competing against established players with significantly larger resources?',
  
  // Section 6: Logistics & Commitment
  employment_status: 'Currently employed, actively seeking new opportunities',
  notice_period: '4 weeks',
  available_by_july15: true,
  contract_to_hire: true,
  comp_alignment: 'Aligns with my expectations',
  remote_work_excellence: 'Dedicated home office with high-speed internet, proven track record of managing remote teams across 3 time zones, excellent communication skills, self-motivated with strong time management abilities.',
  
  // Section 7: The Differentiator
  unique_edge: 'I bring a unique combination of technical AI expertise, proven B2C scaling experience, and deep understanding of privacy-first product development. My background in both startup and enterprise environments gives me the versatility to navigate rapid growth while maintaining product quality and user trust.',
  evidence_link1: 'https://github.com/sarahjohnson/ai-privacy-toolkit',
  evidence_link2: 'https://medium.com/@sarahjohnson/building-privacy-first-ai-products',
  evidence_link3: 'https://www.linkedin.com/in/sarahjohnson-pm',
  
  // Section 8: Vendor Management
  vendor_experience: 'Managed relationships with 5+ outsourced development teams across different time zones. Successfully delivered 3 major product releases using distributed teams in Eastern Europe and Asia, maintaining quality standards and timeline adherence.',
  vendor_metrics: 'Code quality scores, sprint velocity, bug rates, communication responsiveness, deliverable accuracy, timeline adherence, cost efficiency, knowledge transfer effectiveness',
  vendor_escalation: 'Escalated performance issues with offshore team when sprint velocity dropped 40% and bug rates increased. Implemented daily standups, code review processes, and clear documentation standards, resulting in 60% improvement within 4 weeks.',
  
  // Section 9: Final Declaration
  declaration_accurate: true,
  declaration_excited: true,
  declaration_understands_excellence: true,
  declaration_accountable: true,
  digital_signature: 'Sarah Johnson',
  
  // Metadata
  submission_date: new Date().toISOString(),
  email_for_notification: 'sarah.johnson@example.com'
});

export const runBackgroundTest = async (
  submitToSupabase: (data: FormData) => Promise<{ success: boolean; submissionId?: string }>,
  sendEmailNotification: (email: string, fullName: string) => Promise<boolean>
) => {
  console.log('🧪 Running background test submission...');
  
  // Create test data
  const testData = createTestFormData();
  
  console.log('📋 Background test data created:', {
    fullName: testData.fullName,
    email: testData.email,
    totalFields: Object.keys(testData).length,
    sampleFields: {
      role1_company: testData.role1_company,
      ai_arch_rating: testData.ai_arch_rating,
      prioritization_total: testData.prioritization_privacy + testData.prioritization_ai + testData.prioritization_ux + testData.prioritization_growth + testData.prioritization_revenue
    }
  });
  
  try {
    // Step 1: Test database submission
    console.log('📝 Testing database submission...');
    const { success, submissionId } = await submitToSupabase(testData);
    
    if (!success) {
      console.error('❌ Background test: Database submission failed');
      return;
    }

    console.log('✅ Background test: Database submission successful', { submissionId });

    // Step 2: Test email notification
    console.log('📧 Testing email notification...');
    const emailSent = await sendEmailNotification(testData.email, testData.fullName);
    
    console.log(`📧 Background test: Email notification ${emailSent ? 'successful' : 'failed'}`);
    
    console.log('🎉 Background test completed successfully!', {
      submissionId,
      emailSent,
      testData: {
        name: testData.fullName,
        email: testData.email,
        totalFields: Object.keys(testData).length
      }
    });
    
  } catch (error) {
    console.error('❌ Background test failed:', error);
    throw error;
  }
};