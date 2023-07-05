import java.util.*; // missing
public class Winner{

public static void main(String args[]){

// Distance covered in one jump
int jim = 22, jack=17, john=14;

Scanner sc = new Scanner(System.in);
int input = sc.nextInt();

// For storing distance covered by Jim, Jack & John respectively
int arr[] = {0,0,0}; //int arr[3]

//Jump count
int jimJump=0;
int jackJump=0;
int johnJump = 0;

// for calulating total distance covered in given time
for(int i=0; i<input;i+=2){
	
	if(jimJump == 0){ 
		arr[0] += jim;
		//System.out.println("after "+(i+2)+"seconds Jim covered "+arr[0]);
		jimJump++;	
	}else{
		jimJump--; 
		}

	if(jackJump == 0 || jackJump%2 != 0){
		arr[1] += jack;
		//System.out.println("after "+(i+2)+"seconds Jack covered "+arr[1]);
		jackJump++;	
	}else{
		jackJump=0;
		}
	
	if(johnJump == 0 || jackJump%4 != 0){
		arr[2] += john;
		//System.out.println("after "+(i+2)+"seconds John covered "+arr[2]);
		johnJump++;	
	}else{
		johnJump=0;
		}
	
}

int index = 0;

// for findinng max. distance
for(int i=0; i<arr.length-1;i++){
	if(arr[i]<arr[i+1]){
		index = i+1;
	}

}

// for finding winner
//if(index == 0){
//	System.out.println("Winner - Jim");
//	}else if(index == 1){
//	System.out.println("Winner - Jack");
//	}else{
//	System.out.println("Winner - John");
//	}

System.out.println("Winner - "+getWinner(index));


}

//For getting name of winner
public static String getWinner(int index){
	if(index == 0){
	return "Jim";
	}else if(index == 1){
	return "Jack";
	}else{
	return "John";
	}	
	}

}