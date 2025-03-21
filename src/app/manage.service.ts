import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  constructor(
    private http: HttpClient
  ) { }

loginValid = new BehaviorSubject(false)
// certificateLogin = new BehaviorSubject(false)

  baseUrl: string = 'https://educatorbox.com/api/';

  // dashboard 
  get_dashboad(data: any) {
    return this.http.post<any>(this.baseUrl + 'dashboard_view.php', data);
  }
  get_dashboad_admin() {
    return this.http.get<[]>(this.baseUrl + 'admin_dashboard_view.php');
  }
  //for admin
  admin_login(data: any) {
    return this.http.post<[]>(this.baseUrl + 'admin_login.php', data)
  }
  // for admin enquiry 
  post_admin_enquiry(data: any) {
    return this.http.post<any>(this.baseUrl + 'admin_enquiry_insert.php', data)
  }
  get_admin_enquiry() {
    return this.http.get<[]>(this.baseUrl + 'get_admin_enquiry.php')
  }
  admin_delete_enquiry(data: any) {
    return this.http.post<any>(this.baseUrl + 'admin_enquiry_delete.php', data);
  }
  admin_for_student_view(){
    return this.http.get<[]>(this.baseUrl + 'admin_for_student_view.php')
  }
  admin_for_admission_view(){
    return this.http.get<[]>(this.baseUrl + 'admin_for_admission_view.php')
  }
  // for course module 
  get_course() {
    return this.http.get<[]>(this.baseUrl + 'course_view.php');
  }
  course_for_admin() {
    return this.http.get<[]>(this.baseUrl + 'get_course_for_admin.php');
  }
  post_course(data: any) {
    return this.http.post<any>(this.baseUrl + 'course_insert.php', data);
  }
  put_course(data: any) {
    return this.http.put<any>(this.baseUrl + 'course_update.php', data);
  }
  course_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'course_delete.php', data);
  }
  get_course_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_course_by_inst_id.php', data);
  }
  get_course_for_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_course_for_std.php', data);
  }
  course_status_manage(data: any) {
    return this.http.post<any>(this.baseUrl + 'course_status_manage.php', data);
  }
  // for batch module 
  get_batch() {
    return this.http.get<[]>(this.baseUrl + 'batch_view.php');
  }
  batch_for_admin() {
    return this.http.get<[]>(this.baseUrl + 'get_batch_for_admin.php');
  }
  post_batch(data: any) {
    return this.http.post<any>(this.baseUrl + 'batch_insert.php', data);
  }
  put_batch(data: any) {
    return this.http.put<any>(this.baseUrl + 'batch_update.php', data);
  }
  batch_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'batch_delete.php', data);
  }
  get_batch_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_batch_by_inst_id.php', data);
  }
  get_batch_for_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_batch_for_std.php', data);
  }
  get_batch_by_course_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_batch_by_course_id.php', data);
  }
  get_batch_by_batch_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_batch_by_batch_id.php', data);
  }
  get_total_std_by_inst(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_total_std_by_inst_id.php', data);
  }
  get_std_for_batch_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_std_for_batch_id.php', data);
  }
  get_inst_by_inst_name(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_inst_by_inst_name.php', data);
  }
  // for student module 
  get_student() {
    return this.http.get<[]>(this.baseUrl + 'std_view.php');
  }
  post_student(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_insert.php', data);
  }
  put_student(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_update.php', data);
  }
  std_self_reg(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_self_reg.php', data);
  }
  get_student_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_student_by_inst_id.php', data);
  }
  get_std_status_by_inst(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_std_status_by_inst.php', data);
  }
  std_login(data: any) {
    return this.http.post<any>(this.baseUrl + 'student_login.php', data);
  }

  std_admission(data: any) {
      console.log(Array.from(data.entries()))
    return this.http.post<any>(this.baseUrl + 'student_admission_insert.php', data);
  }

  admission_delete(data: any) {
      console.log(Array.from(data.entries()))
    return this.http.post<any>(this.baseUrl + 'admission_delete.php', data);
  }

  get_inst_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_inst_by_inst_id.php', data);
  }
  get_admission_id_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_admission_id_by_std_id.php', data);
  }
  get_admission_by_status(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_admission_by_status.php', data);
  }
  admission_update(data: any) {
    return this.http.post<any>(this.baseUrl + 'admission_update.php', data);
  }
  get_std_by_reg_no(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_std_by_reg_no.php', data);
  }
  get_dues_by_reg_no(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_dues_by_reg_no.php', data);
  }
  
  aadhar_verification(data: any) {
    return this.http.post<any>(this.baseUrl + 'aadhar_verification.php', data);
  }

  duplicate_addmission(data: any) {
    return this.http.post<any>(this.baseUrl + 'duplicate_addmission.php', data);
  }
  count_std_as_reg_no(data: any) {
    return this.http.post<any>(this.baseUrl + 'count_std_as_reg_no.php', data);
  }
  student_reg_no_confirm(data: any) {
    return this.http.post<any>(this.baseUrl + 'student_reg_no_confirm.php', data);
  }
  student_delet(data: any) {
    return this.http.post<any>(this.baseUrl + 'student_delet.php', data);
  }
  count_roll_no_by_batch(data: any) {
    return this.http.post<any>(this.baseUrl + 'count_roll_no_by_batch.php', data);
  }
  roll_no_update(data: any) {
    return this.http.post<any>(this.baseUrl + 'roll_no_update.php', data);
  }
  // for fee module component payment recive
  get_fee() {
    return this.http.get<[]>(this.baseUrl + 'fee_view.php')
  }
  get_student_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_student_by_std_id.php', data);
  }
  get_fee_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_fee_by_inst_id.php', data);
  }
  post_fee(data: any) {
    return this.http.post<any>(this.baseUrl + 'fee_insert.php', data);
  }
  put_fee(data: any) {
    return this.http.post<any>(this.baseUrl + 'fee_update.php', data);
  }
  get_course_by_course_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_course_by_course_id.php', data);
  }
  student_conform(data: any) {
    return this.http.post<any>(this.baseUrl + 'student_conform.php', data);
  }
 
  // for enquiry module 
  post_enquiry(data: any) {
    return this.http.post<any>(this.baseUrl + 'enquiry_insert.php', data)
  }
  put_enquiry(data: any) {
    return this.http.put<any>(this.baseUrl + 'enquiry_update.php', data)
  }
  enquiry_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'enquiry_delete.php', data)
  }
  get_enquiry_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_enquiry_by_inst_id.php', data)
  }
  // for quiz module 
  get_quiz() {
    return this.http.get<[]>(this.baseUrl + 'quiz_view.php');
  }
  post_quiz(data: any) {
    return this.http.post<any>(this.baseUrl + 'quiz_insert.php', data)
  }
  put_quiz(data: any) {
    return this.http.put<any>(this.baseUrl + 'quiz_update.php', data)
  }
  quiz_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'quiz_delete.php', data);
  }
  get_quiz_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_quiz_by_inst_id.php', data)
  }
  get_quiz_no_inst_course(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_quiz_no_inst_course.php', data)
  }
  check_quiz_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'check_quiz_by_std_id.php', data)
  }
  quiz_update_by_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'quiz_update_by_std.php', data)
  }
  get_quiz_course(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_quiz_course.php', data)
  }
  get_quiz_result_by_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_quiz_result_by_std.php', data)
  }
  get_quiz_dashboard_for_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_quiz_dashboard_for_std.php', data)
  }
  // for stduent correct quiz answer 
  std_quiz_insert(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_quiz_insert.php', data)
  }
  // for notification module
  post_notification(data: any) {
    return this.http.post<any>(this.baseUrl + 'notification_insert.php', data);
  }
  put_notification(data: any) {
    return this.http.put<any>(this.baseUrl + 'notification_update.php', data)
  }
  notification_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'notification_delete.php', data);
  }
  get_notification_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_notification_by_inst_id.php', data);
  }
  // for inst book module
  post_inst_book(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_book_insert.php', data);
  }
  put_inst_book(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_book_update.php', data)
  }
  inst_book_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_book_delete.php', data);
  }
  get_book_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_book_by_inst_id.php', data);
  }
  get_book_for_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_book_for_std.php', data);
  }
  // for inst notes module
  post_inst_notes(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_notes_insert.php', data);
  }
  put_inst_notes(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_notes_update.php', data);
  }
  inst_notes_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_notes_delete.php', data);
  }
  get_notes_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_notes_by_inst_id.php', data);
  }
  get_notes_for_std(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_notes_for_std.php', data);
  }
  // for inst syllabus module
  post_inst_syllabus(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_syllabus_insert.php', data);
  }
  put_inst_syllabus(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_syllabus_update.php', data);
  }
  inst_syllabus_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_syllabus_delete.php', data);
  }
  get_syllabus_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_syllabus_by_inst_id.php', data);
  }
  // for inst question bank module
  post_inst_question_bank(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_question_bank_insert.php', data);
  }
  put_inst_question_bank(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_question_bank_update.php', data);
  }
  inst_question_bank_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_question_bank_delete.php', data);
  }
  get_question_bank_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_question_bank_by_inst_id.php', data);
  }
  // for institute module 
  institute_view() {
    return this.http.get<[]>(this.baseUrl + 'institute_view.php');
  }
  inst_post(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_insert.php', data);
  }
  delete_inst(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_delete.php', data);
  }
  put_inst(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_update.php', data);
  }
  inst_self_reg(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_self_reg.php', data);
  }
  inst_login(data: any) {
    return this.http.post<any>(this.baseUrl + 'institute_login.php', data);
  }
  // for admission 
  std_email_verfiy(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_email_verify.php', data);
  }
  get_admission() {
    return this.http.get<[]>(this.baseUrl + 'admission_view.php')
  }
  get_admission_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_admission_by_inst_id.php', data);
  }
  // for fee 
  get_fee_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_fee_by_std_id.php', data);
  }
  check_month_pay(data: any) {
    return this.http.post<any>(this.baseUrl + 'check_month_pay.php', data);
  }
  check_fee_type_pay(data: any) {
    return this.http.post<any>(this.baseUrl + 'check_fee_type.php', data);
  }
  // for address 
  post_country(data: any) {
    return this.http.post<any>(this.baseUrl + 'country_insert.php', data)
  }
  put_country(data: any) {
    return this.http.put<any>(this.baseUrl + 'country_update.php', data);
  }
  get_country() {
    return this.http.get<[]>(this.baseUrl + 'country_view.php')
  }
  delete_country(data: any) {
    return this.http.post<any>(this.baseUrl + 'country_delete.php', data);
  }
  post_state(data: any) {
    return this.http.post<any>(this.baseUrl + 'state_insert.php', data)
  }
  put_state(data: any) {
    return this.http.put<any>(this.baseUrl + 'state_update.php', data);
  }
  get_state() {
    return this.http.get<[]>(this.baseUrl + 'state_view.php')
  }
  get_state_by_country(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_state_by_country.php', data)
  }
  delete_state(data: any) {
    return this.http.post<any>(this.baseUrl + 'state_delete.php', data);
  }
  post_district(data: any) {
    return this.http.post<any>(this.baseUrl + 'district_insert.php', data)
  }
  put_district(data: any) {
    return this.http.put<any>(this.baseUrl + 'district_update.php', data);
  }
  get_district() {
    return this.http.get<[]>(this.baseUrl + 'district_view.php')
  }
  get_district_by_state(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_district_by_state.php', data)
  }
  delete_district(data: any) {
    return this.http.post<any>(this.baseUrl + 'district_delete.php', data);
  }
  post_block(data: any) {
    return this.http.post<any>(this.baseUrl + 'block_insert.php', data)
  }
  put_block(data: any) {
    return this.http.put<any>(this.baseUrl + 'block_update.php', data);
  }
  get_block() {
    return this.http.get<[]>(this.baseUrl + 'block_view.php')
  }
  get_block_by_district(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_block_by_district.php', data)
  }
  delete_block(data: any) {
    return this.http.post<any>(this.baseUrl + 'block_delete.php', data);
  }
  post_panchayat(data: any) {
    return this.http.post<any>(this.baseUrl + 'panchayat_insert.php', data)
  }
  put_panchayat(data: any) {
    return this.http.put<any>(this.baseUrl + 'panchayat_update.php', data);
  }
  get_panchayat() {
    return this.http.get<[]>(this.baseUrl + 'panchayat_view.php')
  }
  get_panchayat_by_block(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_panchayat_by_block.php', data)
  }
  delete_panchayat(data: any) {
    return this.http.post<any>(this.baseUrl + 'panchayat_delete.php', data);
  }
  post_ward(data: any) {
    return this.http.post<any>(this.baseUrl + 'ward_insert.php', data)
  }
  put_ward(data: any) {
    return this.http.put<any>(this.baseUrl + 'ward_update.php', data);
  }
  get_ward() {
    return this.http.get<[]>(this.baseUrl + 'ward_view.php')
  }
  delete_ward(data: any) {
    return this.http.post<any>(this.baseUrl + 'ward_delete.php', data);
  }
  // for query module 
  get_query_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_query_by_inst_id.php', data);
  }
  get_query_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_query_by_std_id.php', data);
  }

  post_std_query(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_queary_insert.php', data)
  }
  put_quary(data: any) {
    return this.http.put<any>(this.baseUrl + 'query_update.php', data);
  }
  //  For Employee Module
  get_emp_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_emp_by_inst_id.php', data)
  }
  postEmployee(data: any) {
    return this.http.post<any>(this.baseUrl + 'employee_insert.php', data)
  }
  putEmployee(data: any) {
    return this.http.post<any>(this.baseUrl + 'employee_update.php', data);
  }
  delete_employee(data: any) {
    return this.http.post<any>(this.baseUrl + 'employee_delete.php', data);
  }
  // for dues  module working 
  get_dues_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_dues_by_inst_id.php', data);
  }
  get_dues_by_std_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_dues_by_std_id.php', data);
  }
 
  // for certificate module working
  get_certificate() {
    return this.http.get<[]>(this.baseUrl + 'get_certificate.php')
  }
  get_certificate_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_certificate_by_inst_id.php', data)
  }
  post_certificate_personal(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_personal_insert.php', data)
  }
  put_certificate_permanent(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_permanent_update.php', data)
  }
  put_certificate_registration(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_rigistration_update.php', data)
  }
  put_certificate_document(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_document_update.php', data)
  }
  certificate_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_document_delete.php', data)
  }
  get_certificate_by_certificate_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_certificate_by_certificate_id.php', data);
  }
  put_certificate_personal(data: any) {
    return this.http.post<any>(this.baseUrl + 'certificate_personal_update.php', data);
  }
  // for expence module
  post_expense(data: any) {
    return this.http.post<any>(this.baseUrl + 'expence_insert.php', data)
  }
  put_expense(data: any) {
    return this.http.put<any>(this.baseUrl + 'expense_update.php', data);
  }
  get_expence() {
    return this.http.get<[]>(this.baseUrl + 'expense_view.php')
  }
  expence_delete(data: any) {
    return this.http.post<any>(this.baseUrl + 'expence_delete.php', data)
  }
  get_expence_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_expense_by_inst.php', data)
  }

  get_expence_by_date_between(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_expence_by_date_between.php', data);
  }
  get_expence_by_month(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_expence_by_month.php', data);
  }
  
  get_expence_by_year(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_expence_by_year.php', data);
  }
  // for otp verfication 
  inst_reg_otp(data: any) {
    return this.http.post<any>(this.baseUrl + 'send_mail.php', data)
  }
  //ledger module
  post_ledger(data: any) {
    return this.http.post<any>(this.baseUrl + 'ledger_insert.php', data)
  }
  put_ledger(data: any) {
    return this.http.put<any>(this.baseUrl + 'ledger_update.php', data)
  }
  delete_ledger(data: any) {
    return this.http.post<any>(this.baseUrl + 'ledger_delete.php', data)
  }
  get_ledger_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_ledger_by_inst_id.php', data)
  }

  post_employee_login(data: any) {
    return this.http.post<any>(this.baseUrl + 'employee_login.php', data);
  }
  get_emp_by_emp_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_emp_by_emp_id.php', data)
  }
  get_account_calc(data: any) {
    return this.http.post<any>(this.baseUrl + 'account_view_by_store.php', data);
  }

  checkdataleadger(data: any) {
    return this.http.post<any>(this.baseUrl + 'check_ledger.php', data);
  }

  get_ledger_by_date_between(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_ledger_by_date_between.php', data);
  }
  get_ledger_by_month(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_ledger_by_month.php', data);
  }
  
  get_ledger_by_year(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_ledger_by_year.php', data);
  }


  // for send email 
  regsucessfully(data: any) {
    return this.http.post<any>(this.baseUrl + 'regsucessfully.php', data);
  }
  get_std_dashboard_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_std_dashboard_id.php', data)
  }
  profit_loss(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_profitloss.php', data)
  }
  get_profit_loss_by_year(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_profit_loss_by_year.php', data)
  }
  get_profit_loss_by_month(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_profit_loss_by_month.php', data)
  }
  reset_inst_by_inst_id(data: any) {
    return this.http.post<any>(this.baseUrl + 'reset_inst_by_inst_id.php', data)
  }
  get_profit_loss_date_between(data: any) {
    return this.http.post<any>(this.baseUrl + 'get_profit_loss_date_between.php', data)
  }
  // forget password 
  verifiy_forgot(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_verifiy_forgot.php', data)
  }
  inst_chnage_password(data: any) {
    return this.http.post<any>(this.baseUrl + 'inst_chnage_password.php', data)
  }

  std_chnage_password(data: any) {
    console.log(data)
    return this.http.post<any>(this.baseUrl + 'std_chnage_password.php', data)
  }
  
  std_verifiy_forgot(data: any) {
    return this.http.post<any>(this.baseUrl + 'std_verifiy_forgot.php', data)
  }
} 
