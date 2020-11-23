export interface ProductFrame {
  id: number;
  contractId: number;
  title: string;
  capacity: number;
  currentLoanAmount: number;
  totalInvestorNo: string;
  totalLocalPeopleInvestorNo: string;
  region: string;
  isDeleted?: 'Y' | 'N';
  createdAt?: string;
  updatedAt?: string;
}
