
class FacadeLoad{
	
	constructor(){
		this.l1=new Load1();
		this.l2=new Load2();
		this.l3=new Load3();
		this.l4=new Load4();
		this.l5=new Load5();
	}
	load1(){
		this.l1.load();
	}
load2(){
	this.l2.load();
	}
load3(){
	this.l3.load();
}
load4(){
	this.l4.load();
}
load5(){
	this.l5.load();
}
}