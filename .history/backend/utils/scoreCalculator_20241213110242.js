const INDUSTRY_WEIGHTS = {
    'Technology': 10,
    'Finance': 8,
    'Healthcare': 7,
    'Manufacturing': 6,
    'Retail': 5,
  };
  
  const COMPANY_SIZE_WEIGHTS = {
    'Large': 10,
    'Medium': 7,
    'Small': 5,
  };
  
  export const calculateScore = (prospect) => {
    let score = 0;
    
    // Years of experience: 0-10 points
    score += Math.min(prospect.yearsOfExperience, 10);
    
    // Industry weight
    score += INDUSTRY_WEIGHTS[prospect.industry] || 0;
    
    // Company size weight
    score += COMPANY_SIZE_WEIGHTS[prospect.companySize] || 0;
    
    // Job title weight
    if (prospect.jobTitle.toLowerCase().includes('ceo') || prospect.jobTitle.toLowerCase().includes('cto')) {
      score += 10;
    } else if (prospect.jobTitle.toLowerCase().includes('manager')) {
      score += 5;
    }
    
    return Math.min(score, 100);  // Cap the score at 100
  };
  
  