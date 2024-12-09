const express=require('express')
const {getAllEmployee,getEmployee,createEmployee,deleteEmployee,updateEmployee}=require("../controller/employController")

const router=express.Router()

router.route('/employees').get(getAllEmployee)
router.route('/employee').post(createEmployee)
router.route('/employee/:employCode').get(getEmployee)
router.route('/employee/:employCode').patch(updateEmployee)
router.route('/employee/:employCode').delete(deleteEmployee)

module.exports=router;