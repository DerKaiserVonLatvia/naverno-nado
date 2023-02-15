function F1()  
	{	var c=canvas1.getContext("2d");  c.clearRect(0, 0, canvas1.width, canvas1.height);
		var xc=canvas1.width / 2;  	
		var yc=canvas1.height / 2;  
		var a=parseFloat(ta.value);  		
		var b=parseFloat(tb.value);
		var f=parseFloat(tf.value);
		var step=parseFloat(tstep.value); 	
		var m=parseFloat(tm.value);   
		var x, y, t, r;
		
		
		c.strokeStyle="DarkGreen";  c.lineWidth=1; 
		c.beginPath();
		c.moveTo(10, yc); c.lineTo(2*xc-10, yc);
		c.moveTo(xc, 10); c.lineTo(xc, 2*yc-10);
		c.closePath();
		c.stroke();
		
		
		c.strokeStyle="DarkRed"; c.fillStyle="Red"; c.lineWidth=2; 
	for( t=0; t<=2*Math.PI; t+=step)  
	{   r=a+b*Math.sin(f*t); 
		x=r*Math.cos(t); y=r*Math.sin(t);  
		c.fillRect(xc+x*m, yc-y*m, 2, 2);
}	
}
function F2()  
	{	var c=canvas1.getContext("2d");  c.clearRect(0, 0, canvas1.width, canvas1.height);
		var xc=canvas1.width / 2;  	
		var yc=canvas1.height / 2;  
		var a=parseFloat(ta.value);  		
		var b=parseFloat(tb.value);
		var step=parseFloat(tstep.value); 	
		var m=parseFloat(tm.value);   
		var x, y, t, r;
		
		
		c.strokeStyle="DarkGreen";  c.lineWidth=1; 
		c.beginPath();
		c.moveTo(10, yc); c.lineTo(2*xc-10, yc);
		c.moveTo(xc, 10); c.lineTo(xc, 2*yc-10);
		c.closePath();
		c.stroke();
		
		
		c.strokeStyle="DarkRed"; c.fillStyle="Red"; c.lineWidth=2; 
	for( t=0; t<=b*2*Math.PI; t+=step)  
	{   r=a*t; 
		x=r*Math.cos(t); y=r*Math.sin(t);  
		c.fillRect(xc+x*m, yc-y*m, 2, 2);
}	
}
function F3()  
	{	var c=canvas1.getContext("2d");  c.clearRect(0, 0, canvas1.width, canvas1.height);
		var xc=canvas1.width / 2;  	
		var yc=canvas1.height / 2;  
		var a=parseFloat(ta.value);  		
		var b=parseFloat(tb.value);
		var step=parseFloat(tstep.value); 	
		var m=parseFloat(tm.value);   
		var x, y, t, r;
		
		
		c.strokeStyle="DarkGreen";  c.lineWidth=1; 
		c.beginPath();
		c.moveTo(10, yc); c.lineTo(2*xc-10, yc);
		c.moveTo(xc, 10); c.lineTo(xc, 2*yc-10);
		c.closePath();
		c.stroke();
		
		
		c.strokeStyle="DarkRed"; c.fillStyle="Red"; c.lineWidth=2; 
	for( t=0; t<=6*Math.PI; t+=step)  
	{   r=2*t+Math.sin(7*t); 
		x=r*5*Math.cos(t); y=r*Math.sin(t);  
		c.fillRect(xc+x*m, yc-y*m, 2, 2);
}	
}
function F4()  
	{	var c=canvas1.getContext("2d");  c.clearRect(0, 0, canvas1.width, canvas1.height);
		var xc=canvas1.width / 2;  	
		var yc=canvas1.height / 2;  
		var a=parseFloat(ta.value);  		
		var b=parseFloat(tb.value);
		var f=parseFloat(tf.value);
		var step=parseFloat(tstep.value); 	
		var m=parseFloat(tm.value);   
		var x, y, t, r;
		
	
		
		
		c.strokeStyle="DarkRed"; c.fillStyle="Red"; c.lineWidth=2; 
	for( t=0; t<=2*Math.PI; t+=step)  
	{   r=a+b*Math.sin(f*t); 
		x=r*Math.cos(t); y=r*Math.sin(t);  
		c.fillRect(xc+x*m, yc-y*m, 2, 2);
		c.moveTo(xc, yc); c.lineTo(xc+x*m, yc-y*m);
		c.closePath();
		c.stroke();
		
	}
		c.strokeStyle="DarkRed"; c.fillStyle="Red"; c.lineWidth=2; 
	for( t=0; t<=2*Math.PI; t+=step)  
	{   r=a+b*Math.sin(f*t); 
		x=r*Math.cos(t); y=r*Math.sin(t);  
		c.fillRect(xc+x*m, yc-y*m, 2, 2);
		
		
	}	
}