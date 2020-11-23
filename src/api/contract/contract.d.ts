export interface Contract {
  id: number;
  plantId: number;
  title: string;
  amount: number;
  interestRate: number;
  bankCode: string;
  bankAccNo: string;
  borrowerName: string;
  loanDate: string;
  repayDate: string;
  isLaunched?: 'Y' | 'N';
  createdAt?: string;
  updatedAt?: string;
}
