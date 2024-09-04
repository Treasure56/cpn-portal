import { createManager } from './admin/createManager'
import { fetchCourses } from './fetch/fetchCourse'

export {adminRegister} from './auth/adminRegister'
export {login} from './auth/login'


export {createManager} from  './admin/createManager'
export {createCenter} from  './admin/createCenter'

export {fetchAdmin} from './fetch/fetchAdmin'
export {fetchCenters} from './fetch/fetchCenters'
export {fetchManagers} from './fetch/fetchManagers'
export {fetchCourses as fetchCourse} from './fetch/fetchCourse'
export {createStudent} from './manager/createStudent'
export {adminFetchStudents} from './fetch/adminFetchStudents'
export {adminFetchStaff} from './fetch/adminFetchStaff'
export {fetchSingleCenter} from './fetch/fetchSingleCenter'
export {adminchangepassword} from './admin/adminchangePassword'
export {adminFetchPayments} from './fetch/adminFetchPayments'


//delete
export {deleteManager} from './admin/deleteManager'
export {deleteStudent} from './admin/deleteStudent'

//edit
export {editManager} from './admin/editManager'

//managers
export {editStudent} from './manager/editStudent'
export {createStaff} from './manager/createStaff'
export {fetchStaff} from './fetch/fetchStaff'
export {editStaff} from './manager/editStaff'
export {deleteStaff} from './manager/deleteStaff'
export {addCourse} from './manager/addCourse'
export {addPayment} from './manager/addPayment'
export {fetchSingleStudentPayment} from './fetch/fetchSingleStudentPayment'
export {fetchInvoice} from './fetch/fetchInvoice'
export {createInvoice} from './manager/createInvoice'
export {fetchIndividualInvoice} from './fetch/fetchIndividualInvoice'
export {fetchSinglePayment} from './fetch/fetchSinglePayment'
export {fetchBalance} from './fetch/fetchPlanBalance'
export {changePassword} from './manager/changepassword'