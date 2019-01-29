//This is the javascript file


var nodes = document.getElementsByClassName('circle');
var redPlayer = "redPlayer"
var yellowPlayer = "yellowPlayer"
var toggle = redPlayer;
var toggler =false;





var myFunction = function(i) {
    var row = Math.floor(i/7); 
    var column = i-row*7
    var didItChange =0;
    var k =0;
    for(k =5 ; k>=0;k--)
    {
        if(!nodes[k*7+column].classList.contains("filled"))
        {
            nodes[k*7+column].classList.add(toggle);
            nodes[k*7+column].classList.add("filled");
            didItChange= 1;
            break;
        }
    }
    if(didItChange==0)
    {
        alert("This column is filled , nothing changed");
    }

    else
    {
        if(toggler)
        toggle = redPlayer
        else
        toggle= yellowPlayer
        toggler = !toggler;
    }
    CheckWinner(k*7+column);
};


var CheckWinner = function(i)
{

    var row = Math.floor(i/7); 
    var column = i-row*7
    console.log("row , col " , row , column);
    var myColor ='';
    if (nodes[i].classList.contains("filled") && nodes[i].classList.contains("yellowPlayer"))
    myColor= yellowPlayer;
    else
    myColor=redPlayer;
    console.log(myColor);
    var checkCount =1;

    // check horizontally 
    for(let k = column+1 ; k<7;k++)
    {
        if(nodes[7*row+k].classList.contains(myColor))
        {
            nodes[7*row+k].classList.add("test")
            nodes[7*row+k].classList.remove("test")

            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return;
            }
        }
        else 
        break;
    }
    for(let k = column-1 ; k>=0;k--)
    {
        if(nodes[7*row+k].classList.contains(myColor))
        {
            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return ;
            }
        }
        else 
        break;
    }
    console.log(checkCount);
    //check vertically
    checkCount =1;
    for(let k = row+1 ; k<6;k++)
    {

        if(nodes[7*k+column].classList.contains(myColor))
        {
            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return;
            }
        }
        else 
        break;
    }
    for(let k = row-1 ; k>=0;k--)
    {
        if(nodes[7*k+column].classList.contains(myColor))
        {

            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return ;
            }
        }
        else 
        break;
    }
    console.log(checkCount);
    //check diagonally1
    checkCount =1;
    for(let k = column+1 ,j=row+1 ; k<7 && j<6;k++,j++)
    {
        
        if(nodes[7*j+k].classList.contains(myColor))
        {
            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return;
            }
        }
        else 
        break;
    }
    for(let k = row-1 , j=column-1  ; k>=0 && j>=0;j--,k--)
    {
        if(nodes[7*k+j].classList.contains(myColor))
        {
            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return ;
            }
        }
        else 
        break;
    }
    console.log(checkCount);
    //check diagonally2
    checkCount =1;
    for(let k = column+1 ,j=row-1 ; k<7 && j>=0;k++,j--)
    {
        if(nodes[7*j+k].classList.contains(myColor))
        {

            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return;
            }
        }
        else 
        break;
    }
    for(let k = row+1 , j=column-1  ; k<6 && j>=0;j--,k++)
    {
        if(nodes[7*k+j].classList.contains(myColor))
        {

            nodes[7*row+k].classList.add("test")
            nodes[7*row+k].classList.remove("test")
            
            checkCount++;
            if(checkCount==4)
            {
                alert(myColor ," Wins the game , Congratulations")
                return ;
            }
        }
        else 
        break;
    }
    console.log(checkCount);

}


for (let i = 0; i < nodes.length; i++) {

        nodes[i].addEventListener('click', function() {
            myFunction(i);
        }, false);
}

