import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  
  batch:object[]=[];
  data:object[]=[];

  presentBatchNo:string;
  
  constructor(private hc:HttpClient,private router:Router, private activatRoute: ActivatedRoute) { }

  ngOnInit() {

    this.hc.get('/admin/batchdetails').subscribe((res)=>{
      this.batch=res['message'];
      console.log(res['message']);
      
    })
  }
  addBatch(data){
    console.log(data);

    this.hc.post('/admin/addbatch',data).subscribe((res)=>{
      alert(res['message']);
      this.ngOnInit()
    })


  }

  deleteBatch(del)
  {

    this.hc.delete(`/admin/batchdetails/${del.batchNo}`,del.batchNo).subscribe((res)=>{
      alert(res['message']);
      this.ngOnInit()
    })
  }

  addStudent(stdObj)
  {
    console.log(stdObj);

    // this.presentBatchNo=stdObj.batchNo;

    

    localStorage.setItem("batchNo",stdObj.batchNo)
    
    // this.hc.get(`/admin/studentdetails/${stdObj.batchNo}`,stdObj.batchNo).subscribe((res)=>{

    // })

    this.router.navigate(['../addStudent'], {relativeTo:this.activatRoute});
  }
}
