import java.util.*; // missing
public class Winner2{

public static void main(String args[]){

// Distance covered in one jump
int jim = 22, jack=17, john=14;

Scanner sc = new Scanner(System.in);

int input = sc.nextInt();
//int input = 10;

// For storing distance covered by Jim, Jack & John respectively
Map<String, Integer> tMap = new HashMap<>();
tMap.put("Jim",0);
tMap.put("Jack",0);
tMap.put("John",0);


// Jump count
int jimJump=0;
int jackJump=0;
int johnJump = 0;

// for calulating total distance covered in given time
for(int i=0; i<input;i+=2){
	
	if(jimJump == 0){ 
		tMap.replace("Jim",tMap.get("Jim")+jim);
		//System.out.println("after "+(i+2)+"seconds Jim covered "+tMap.get("Jim"));
		jimJump++;	
	}else{
		jimJump--; 
		}

	if(jackJump == 0 || jackJump%2 != 0){
		tMap.replace("Jack",tMap.get("Jack")+jack);
		//System.out.println("after "+(i+2)+"seconds Jack covered "+tMap.get("Jack"));
		jackJump++;	
	}else{
		jackJump=0;
		}
	
	if(johnJump == 0 || johnJump%4 != 0){
		tMap.replace("John",tMap.get("John")+john);
		//System.out.println("after "+(i+2)+"seconds John covered "+tMap.get("John"));
		johnJump++;	
	}else{
		johnJump=0;
		}
	
}


//For finding winner name
//String winner;
//if( tMap.get("Jim") < tMap.get("Jack"))
//	{
//		if( tMap.get("Jack") < tMap.get("John"))
//		{		
//			winner = "John";
//		}else{ winner = "Jack";}
//	}else{
//		if( tMap.get("Jim") < tMap.get("John"))
//		{		
//			winner = "John";
//		}else{ winner = "Jim";}		
//	}

//System.out.println("Winner - "+winner);

// for finding winner name by for-each method
int maxDistance = 0;
String win = "";
    for (Map.Entry<String, Integer> entry : tMap.entrySet() ) {
        if (entry.getValue() > maxDistance) {
		maxDistance = entry.getValue();
		win = entry.getKey();
        }
    }

System.out.println("Winner - "+win);

}

}