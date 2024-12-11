let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let b4=document.getElementById("b4")
let b5=document.getElementById("b5")
let b6=document.getElementById("b6")
let b7=document.getElementById("b7")
let b8=document.getElementById("b8")
let b9=document.getElementById("b9")

let X=document.getElementById("X")
let O=document.getElementById("O")
let t=document.getElementById("t")
let rs=document.getElementById("rs")

let flag=1
let count=0;

let hh=0,pp=0;

function f1()
{
    if(flag==1)
    {
    b1.value="X"
    b1.disabled="true"
    flag=0
    }
    else
    {
        b1.value="O"
        b1.disabled="true"
        flag=1
    }

    hh++
}


function f2()
{
    if(flag==1)
    {
    b2.value="X"
    b2.disabled="true"
    flag=0
    }
    else
    {
        b2.value="O"
        b2.disabled="true"
        flag=1
    }
    hh++
}

function f3()
{
    if(flag==1)
    {
    b3.value="X"
    b3.disabled="true"
    flag=0
    }
    else
    {
        b3.value="O"
        b3.disabled="true"
        flag=1
    }
    hh++
}

function f4()
{
    if(flag==1)
    {
    b4.value="X"
    b4.disabled="true"
    flag=0
    }
    else
    {
        b4.value="O"
        b4.disabled="true"
        flag=1
    }
    hh++
}

function f5()
{
    if(flag==1)
    {
    b5.value="X"
    b5.disabled="true"
    flag=0
    }
    else
    {
        b5.value="O"
        b5.disabled="true"
        flag=1
    }
    hh++
}

function f6()
{
    if(flag==1)
    {
    b6.value="X"
    b6.disabled="true"
    flag=0
    }
    else
    {
        b6.value="O"
        b6.disabled="true"
        flag=1
    }
    hh++
}

function f7()
{
    if(flag==1)
    {
    b7.value="X"
    b7.disabled="true"
    flag=0
    }
    else
    {
        b7.value="O"
        b7.disabled="true"
        flag=1
    }
    hh++
}

function f8()
{
    if(flag==1)
    {
    b8.value="X"
    b8.disabled="true"
    flag=0
    }
    else
    {
        b8.value="O"
        b8.disabled="true"
        flag=1
    }
    hh++
}

function f9()
{
    if(flag==1)
    {
    b9.value="X"
    b9.disabled="true"
    flag=0
    }
    else
    {
        b9.value="O"
        b9.disabled="true"
        flag=1
    }
    hh++
}

function reset()
{
    document.location.reload();
    document.querySelectorAll('#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9 ').forEach(button => button.style.backgroundColor = 'white');
}

function result()
{

//--h1----------------------------------------------------------    
        if(b1.value=='X' && b2.value=='X' && b3.value=='X')
        {
            b1.style.backgroundColor=" rgb(251, 56, 98)"
            b2.style.backgroundColor=" rgb(251, 56, 98)"
            b3.style.backgroundColor=" rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b4, #b5, #b6, #b7, #b8, #b9').forEach(button => button.disabled = true);

            pp++
        }
        else if(b1.value=='O' && b2.value=='O' && b3.value=='O')
        {
            b1.style.backgroundColor="rgb(251, 56, 98)"
            b2.style.backgroundColor="rgb(251, 56, 98)"
            b3.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b4, #b5, #b6, #b7, #b8, #b9').forEach(button => button.disabled = true);
            pp++
        }
       

//---h2---------------------------------------------------------

        if(b4.value=='X' && b5.value=='X' && b6.value=='X')
        {
            b4.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b6.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b1, #b2, #b3, #b7, #b8, #b9').forEach(button => button.disabled = true);
            pp++
        }
        else if(b4.value=='O' && b5.value=='O' && b6.value=='O')
        {
            b4.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b6.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b1, #b2, #b3, #b7, #b8, #b9').forEach(button => button.disabled = true);
            pp++
        }
   
//-----h3------------------------------------------------------

        if(b7.value=='X' && b8.value=='X' && b9.value=='X')
        {
            b7.style.backgroundColor="rgb(251, 56, 98)"
            b8.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b1, #b2, #b3, #b4, #b5, #b6').forEach(button => button.disabled = true);
            pp++
        }
        else if(b7.value=='O' && b8.value=='O' && b9.value=='O')
        {
            b7.style.backgroundColor="rgb(251, 56, 98)"
            b8.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b1, #b2, #b3, #b4, #b5, #b6').forEach(button => button.disabled = true);
            pp++
        }


//-----v1-----------------------------------------------------

        if(b1.value=='X' && b4.value=='X' && b7.value=='X')
        {
            b1.style.backgroundColor="rgb(251, 56, 98)"
            b4.style.backgroundColor="rgb(251, 56, 98)"
            b7.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b8, #b2, #b3, #b9, #b5, #b6').forEach(button => button.disabled = true);
            pp++
        }
        else if(b1.value=='O' && b4.value=='O' && b7.value=='O')
        {
            b1.style.backgroundColor="rgb(251, 56, 98)"
            b4.style.backgroundColor="rgb(251, 56, 98)"
            b7.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b8, #b2, #b3, #b9, #b5, #b6').forEach(button => button.disabled = true);
            pp++
        }

//-----v2--------------------------------------------------------

        if(b2.value=='X' && b5.value=='X' && b8.value=='X')
        {
            b2.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b8.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b4, #b6, #b1, #b7, #b3, #b9').forEach(button => button.disabled = true);
            pp++
        }
        else if(b2.value=='O' && b5.value=='O' && b8.value=='O')
        {
            b2.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b8.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b4, #b1, #b6, #b7, #b3, #b9').forEach(button => button.disabled = true);
            pp++
        }
//------v3-------------------------------------------------
                
        if(b3.value=='X' && b6.value=='X' && b9.value=='X')
        {
            b3.style.backgroundColor="rgb(251, 56, 98)"
            b6.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b1, #b2, #b4, #b5, #b8, #b7').forEach(button => button.disabled = true);
            pp++
        
        }
        else if(b3.value=='O' && b6.value=='O' && b9.value=='O')
        {
            b3.style.backgroundColor="rgb(251, 56, 98)"
            b6.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b1, #b2, #b4, #b5, #b8, #b7').forEach(button => button.disabled = true);
            pp++
        }

//-----d1---------------------------------------------------------                   

        if(b1.value=='X' && b5.value=='X' && b9.value=='X')
        {
            b1.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b4, #b2, #b3, #b7, #b8, #b6').forEach(button => button.disabled = true);
            pp++
        }
        else if(b1.value=='O' && b5.value=='O' && b9.value=='O')
        {
            b1.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b9.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b4, #b2, #b3, #b7, #b8, #b6').forEach(button => button.disabled = true);
            pp++
        }
    
//------d2-------------------------------------------------------       

        if(b3.value=='X' && b5.value=='X' && b7.value=='X')
        {
            b3.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b7.style.backgroundColor="rgb(251, 56, 98)"
            X.style.display="block"
            document.querySelectorAll('#b1, #b2, #b4, #b6, #b8, #b9').forEach(button => button.disabled = true);
            pp++
        }
        else if(b3.value=='O' && b5.value=='O' && b7.value=='O')
        {
            b3.style.backgroundColor="rgb(251, 56, 98)"
            b5.style.backgroundColor="rgb(251, 56, 98)"
            b7.style.backgroundColor="rgb(251, 56, 98)"
            O.style.display="block"
            document.querySelectorAll('#b1, #b2, #b4, #b6, #b8, #b9').forEach(button => button.disabled = true);
            pp++
        }


//--------------------------------------------------

        // if(b1.value!='' && b2.value!='' && b3.value!='' &&  b4.value!='' &&  b5.value!='' &&  b6.value!='' &&  b7.value!='' &&  b8.value!=' '&&  b9.value!='')
        // {
        //     draw.style.display="block"
        // }

    //    if((b1.value=='X' || b1.value=='O') && (b2.value=='X' || b2.value=='O') && (b3.value=='X' || b3.value=='O') && (b4.value=='X' || b4.value=='O') && (b5.value=='X' || b5.value=='O') && (b6.value=='X' || b6.value=='O') && (b7.value=='X' || b7.value=='O') && (b8.value=='X' || b8.value=='O') && (b9.value=='O'||b9.value=='X'))
    //     {
    //         draw.style.display="block"
    //     }

    if(hh==9 && pp==0)
    {
        draw.style.display="block"
    }
        
        
           
}



