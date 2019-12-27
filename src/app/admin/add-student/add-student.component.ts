import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 
  student:object[]=[];
  eObj:any={};
  presentBatchNo:any;
  constructor(private hc:HttpClient) { }

  ngOnInit() {

    this.getdetails()
  }


  getdetails()
  {
    let batchNo=localStorage.getItem('batchNo')
    
    this.hc.get(`/admin/studentdetails/${batchNo}`).subscribe((res)=>{
      this.student=res['message'];
    })

    this.presentBatchNo=localStorage.getItem("batchNo")

  }

  studentReg(data)
  {
    
    console.log(data);
    
    
    this.hc.post('/admin/addstudent',data).subscribe((res)=>{
      alert(res['message']);
      
    })

    this.getdetails()

  }
  editObj(obj)
  {
    
    console.log(obj);
    
    this.eObj=obj;
    console.log(this.eObj);
    
  }

  deleteStudent(del)
  {
    this.hc.delete(`/admin/studentdetails/${del.studentId}`,del.studentId).subscribe((res)=>{
      alert(res['message']);
    })
    
    this.getdetails()
  }
  
  editStudent(data)
  {

    console.log(data);
    

    this.hc.put('/admin/studentdetails',data).subscribe((res=>{
      alert(res['message']);
      
    }))
    console.log(data);

    this.getdetails()
  }
}
