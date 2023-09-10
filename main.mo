import Text "mo:base/Text";
import Bool "mo:base/Bool";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import List "mo:base/List";
import Option "mo:base/Option";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";



actor{

  type User={
    email:Text;
    password:Text;
  };

  type Uservote={
    opi:Nat;
    email:Text;
  };

  // stable var loggedinusers=List.nil<User>();
  stable var loggedinusers: [User]=[];
   var voteinfo=List.nil<Uservote>();
   let unqkeys : [Text] = [  "Z7K9WQYR3X",
    "P2A4F6L8J0",
    "H5E1V7I9G3",
    "M6N8T0D2B4",
    "Q3R1Z5K7X9",
    "C0V2B4N6M8",
    "L9J3H5F1D7",
    "U4Y6T8R0E2",
    "S7P5O1K3N9",
    "G2I4V6E8A0",
    "W9X7Q5Z3C1",
    "R3U1M5B7L9",
    "D0S2P4O6K8",
    "X7N9J3H5F1",
    "E2C4V6B8Q0",
    "T5R7Z9W1Y3",
    "F1L3D5M7G9",
    "V0U2K4I6X8",
    "A9P1O3E5H7",
    "K2S4C6N8T0",
    "B7R9Z1W3V5",
    "O6J8G0Q2N4",
    "Y3U5M7L9T1",
    "N2I4F6E8R0",
    "H7A9D1K3P5"];


   var op0:Nat=0;
   var op1:Nat=0;
   var op2:Nat=0;
   var op3:Nat=0;
   var op4:Nat=0;
  


  //    private func userExists(email: Text): Bool{
  //   let existingUser = List.find<User>(loggedinusers, func user{user.email == email});
  //   return Option.isSome(existingUser);
  // };
       private func userExists(email: Text): Bool{
    return  Array.find<User>(loggedinusers, func user{user.email == email})!=null;
  
  };

func isInArray(str : Text) : Bool {
  return Array.find<Text>(unqkeys:[Text],func x{x==str})!=null;
};

  public  func enlistuser(emai:Text,pass:Text): async Bool{
    Debug.print(debug_show(loggedinusers));

   if (userExists(emai) ) {
      Debug.print("User already exists:");
      return false;
    };
if(isInArray(emai)){
  var newuser : User ={
      email = emai;
      password=pass;
    };

    // loggedinusers:=List.push<User>(newuser,null);
    // stable var loggedinusers=List.nil<User>();
   var lbuffer=Buffer.Buffer<User>(loggedinusers.size());
   for (x in  loggedinusers.vals()){
    lbuffer.add(x);
   };
   lbuffer.add(newuser);
   loggedinusers:=lbuffer.toArray();
    return true;
};
return false;
  };

public shared(msg) func vote(opt:Nat): async Bool{
if(opt==0){
op0+=1;
}
else if(opt==1){
  op1+=1;
}
else if(opt==2){
  op2+=1;
}
else if(opt==3){
  op3+=1;
}
else if(opt==4){
  op4+=1;
};

return true;
};

public shared(msg) func getemail(op: Nat, em: Text): async Bool {
  var userch : Uservote = {
    opi = op;
    email = em;
  };

  voteinfo := List.push<Uservote>(userch, voteinfo);

  return true;
};

public  func getresult(): async Text {
  
  if (op0 > op1 and op0 > op2 and op0 > op3 and op0 > op4) {
    return "Union1 Won";
  } else if (op1 > op0 and op1 > op2 and op1 > op3 and op1 > op4) {
    return "Union2 Won";
  } else if (op2 > op0 and op2 > op1 and op2 > op3 and op2 > op4) {
    return "Union3 Won";
  } else if (op3 > op0 and op3 > op1 and op3 > op2 and op3 > op4) {
    return "Union4 Won";
  } else if (op4 > op0 and op4 > op1 and op4 > op2 and op4 > op3) {
    return "Union5 Won";
  } else {
    return "No Clear Winner";
  }
}


}