import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminDuesComponent } from './admin/admin-dues/admin-dues.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPaymetRecivedComponent } from './admin/admin-paymet-recived/admin-paymet-recived.component';
import { BlockComponent } from './admin/block/block.component';
import { CountryComponent } from './admin/country/country.component';
import { DistrictComponent } from './admin/district/district.component';
import { InsCourseComponent } from './admin/ins-course/ins-course.component';
import { InsadmissionComponent } from './admin/insadmission/insadmission.component';
import { InsbatchComponent } from './admin/insbatch/insbatch.component';
import { InsstudentComponent } from './admin/insstudent/insstudent.component';
import { InstituteComponent } from './admin/institute/institute.component';
import { PanchayatComponent } from './admin/panchayat/panchayat.component';
import { StateComponent } from './admin/state/state.component';
import { TAndCComponent } from './admin/t-and-c/t-and-c.component';
import { ViewportComponent } from './admin/viewport/viewport.component';
import { WardComponent } from './admin/ward/ward.component';
import { DemopageComponent } from './homepage/demopage/demopage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEditCertificateComponent } from './institute/add-edit-certificate/add-edit-certificate.component';
import { AdmissionComponent } from './institute/admission/admission.component';
import { BatchComponent } from './institute/batch/batch.component';
import { CertificateComponent } from './institute/certificate/certificate.component';
import { CourseComponent } from './institute/course/course.component';
import { ELearningComponent } from './institute/e-learning/e-learning.component';
import { EmployeeComponent } from './institute/employee/employee.component';
import { EnquiryComponent } from './institute/enquiry/enquiry.component';
import { ExpenceComponent } from './institute/expence/expence.component';
import { InstBookComponent } from './institute/inst-book/inst-book.component';
import { InstChangePasswordComponent } from './institute/inst-change-password/inst-change-password.component';
import { InstNotesComponent } from './institute/inst-notes/inst-notes.component';
import { InstNotificationComponent } from './institute/inst-notification/inst-notification.component';
import { InstQueryComponent } from './institute/inst-query/inst-query.component';
import { InstQuestionBankComponent } from './institute/inst-question-bank/inst-question-bank.component';
import { InstQuizComponent } from './institute/inst-quiz/inst-quiz.component';
import { InstSyllabusComponent } from './institute/inst-syllabus/inst-syllabus.component';
import { InstituteDashboardComponent } from './institute/institute-dashboard/institute-dashboard.component';
import { InstituteHomeComponent } from './institute/institute-home/institute-home.component';
import { InstituteLoginComponent } from './institute/institute-login/institute-login.component';
import { InstquizdashboardComponent } from './institute/instquizdashboard/instquizdashboard.component';
import { LedgerComponent } from './institute/ledger/ledger.component';
import { OESComponent } from './institute/oes/oes.component';
import { PaymentReceivedComponent } from './institute/payment-received/payment-received.component';
import { ProfitLossComponent } from './institute/profit-loss/profit-loss.component';
import { StdDuesComponent } from './institute/std-dues/std-dues.component';
import { StdbathcbyComponent } from './institute/stdbathcby/stdbathcby.component';
import { StudentComponent } from './institute/student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OnlineTestComponent } from './student/online-test/online-test.component';
import { QueryComponent } from './student/query/query.component';
import { QuizDashboardComponent } from './student/quiz-dashboard/quiz-dashboard.component';
import { QuizeComponent } from './student/quize/quize.component';
import { QuizresultComponent } from './student/quizresult/quizresult.component';
import { ResultComponent } from './student/result/result.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { TakeAddmissionComponent } from './student/take-addmission/take-addmission.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { HomeEnquiryComponent } from './admin/home-enquiry/home-enquiry.component';
import { LiveClassComponent } from './institute/live-class/live-class.component';
import { CertificateLoginComponent } from './institute/certificate-login/certificate-login.component';
import { WalletHistoryComponent } from './institute/Payment/wallet-history/wallet-history.component';
import { WalletPayComponent } from './institute/Payment/wallet-pay/wallet-pay.component';
import { AddMoneyRequestComponent } from './institute/Payment/add-money-request/add-money-request.component';
import { AddMoneyComponent } from './institute/Payment/add-money/add-money.component';
import { PaymentTransactionPresentInstComponent } from './institute/Payment/payment-transaction-present-inst/payment-transaction-present-inst.component';
import { CenterListComponent } from './institute/Payment/center-list/center-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      { path: 'demopage', component: DemopageComponent }
    ]
  },
  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'adminhome', component: AdminHomeComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'institute', component: InstituteComponent, },
      {
        path: 'inscourse', component: ViewportComponent,
        children: [
          { path: '', component: InsCourseComponent },
          { path: 'course', component: CourseComponent },
        ]
      },
      {
        path: 'insbatch', component: ViewportComponent,
        children: [
          { path: '', component: InsbatchComponent },
          { path: 'batch', component: BatchComponent },
        ]
      },
      {
        path: 'insstudent', component: ViewportComponent,
        children: [
          { path: '', component: InsstudentComponent },
          { path: 'student', component: StudentComponent },
        ]
      },
      {
        path: 'insadmission', component: ViewportComponent,
        children: [
          { path: '', component: InsadmissionComponent },
          { path: 'admission', component: AdmissionComponent },
        ]
      },

      { path: 'inspayment', component: AdminPaymetRecivedComponent },
      { path: 'insdues', component: AdminDuesComponent },
      { path: 'terms', component: TAndCComponent },
      { path: 'country', component: CountryComponent },
      { path: 'state', component: StateComponent },
      { path: 'district', component: DistrictComponent },
      { path: 'block', component: BlockComponent },
      { path: 'panchayat', component: PanchayatComponent },
      { path: 'ward', component: WardComponent },
      { path: 'homeenquiry', component: HomeEnquiryComponent }
    ]
  },

  { path: 'institutelogin', component: InstituteLoginComponent },
  {
    path: 'institutehome', component: InstituteHomeComponent,
    children: [
      { path: '', component: InstituteDashboardComponent },
      { path: 'dashboard', component: InstituteDashboardComponent },
      { path: 'course', component: CourseComponent },
      {
        path: 'batch', component: ViewportComponent,
        children: [
          { path: '', component: BatchComponent },
          { path: 'studentbatch', component: StdbathcbyComponent },
        ]

      },
      { path: 'student', component: StudentComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'enquiry', component: EnquiryComponent },
      { path: 'fee', component: PaymentReceivedComponent },
      { path: 'dues', component: StdDuesComponent },
      { path: 'instquiz', component: InstQuizComponent },
      { path: 'instquery', component: InstQueryComponent },
      { path: 'instnotification', component: InstNotificationComponent },
      { path: 'instbook', component: InstBookComponent },
      { path: 'instnotes', component: InstNotesComponent },
      { path: 'instsyllabus', component: InstSyllabusComponent },
      { path: 'instquestionbank', component: InstQuestionBankComponent },
      { path: 'instquizdashboard', component: InstquizdashboardComponent },
      { path: 'oes', component: OESComponent },
      { path: 'elearning', component: ELearningComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'certificate', component: CertificateComponent },
      { path: 'add_edit_certificate', component: AddEditCertificateComponent },
      { path: 'expence', component: ExpenceComponent },
      { path: 'ledger', component: LedgerComponent },
      { path: 'profitloss', component: ProfitLossComponent },
      { path: 'country', component: CountryComponent },
      { path: 'state', component: StateComponent },
      { path: 'district', component: DistrictComponent },
      { path: 'block', component: BlockComponent },
      { path: 'panchayat', component: PanchayatComponent },
      { path: 'ward', component: WardComponent },
      { path: 'liveclass', component: LiveClassComponent },
      { path: 'certificateLogin', component: CertificateLoginComponent },

      // for payment  working area

      { path: 'walletHistory', component: WalletHistoryComponent },
      { path: 'walletPay', component: WalletPayComponent },
      { path: 'addmoneyreq', component: AddMoneyRequestComponent },
      { path: 'addmoney', component: AddMoneyComponent },
      { path: 'paymenttransactionlist', component: PaymentTransactionPresentInstComponent },
      { path: 'centerlist', component: CenterListComponent }

    ]
  },

  {
    path: 'studentlogin', component: StudentLoginComponent,
  },
  {
    path: 'studenthome', component: StudentHomeComponent,
    children: [
      { path: '', component: StudentDashboardComponent },
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'course', component: CourseComponent },
      { path: 'batch', component: BatchComponent },
      { path: 'takeaddmission', component: TakeAddmissionComponent },
      { path: 'studentprofile', component: StudentProfileComponent },
      { path: 'paymentreceived', component: PaymentReceivedComponent },
      { path: 'dues', component: StdDuesComponent },
      { path: 'query', component: QueryComponent },
      { path: 'onlinetest', component: OnlineTestComponent },
      { path: 'result', component: ResultComponent },
      { path: 'quiz', component: QuizeComponent },
      { path: 'instbook', component: InstBookComponent },
      { path: 'instnotes', component: InstNotesComponent },
      { path: 'instsyllabus', component: InstSyllabusComponent },
      { path: 'instquestionbank', component: InstQuestionBankComponent },
      { path: 'quizdashboard', component: QuizDashboardComponent },
      { path: 'quizresult', component: QuizresultComponent },
      { path: 'liveclass', component: LiveClassComponent }

    ]
  },

  { path: 'employeelogin', component: EmployeeLoginComponent },
  {
    path: 'employeehome', component: EmployeeHomeComponent,
    children: [
      { path: '', component: EmployeeDashboardComponent },
      { path: 'employeedashboard', component: EmployeeDashboardComponent },
      { path: 'enquiry', component: EnquiryComponent },
    ]
  },

  { path: '**', component: PageNotFoundComponent }

];
@NgModule({

  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
