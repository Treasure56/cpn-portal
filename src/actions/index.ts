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

//delete
export {deleteManager} from './admin/deleteManager'

//edit
export {editManager} from './admin/editManager'