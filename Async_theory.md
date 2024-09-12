javaScript

Async

JavaScript 

JS is a synchronous type language. which means the codes are exicuted in an order.(one By one)

Js is a single threaded language. But never feels slow because it mostly not found saperatlly . 
 its a Default JS

 Execution Context ----->exicutes line by line

            |
            |
singlethread|-------->console.log(1)
----------->|
            |
            |--------->console.log(2)
            |
          ~\|/    Call Stack  memoryHeap


    BLOCKING CODE                 VS            NON BLOCKING CODE
         |                                            |
         |                                            |
 blocks the flow of the program               doesnt block the exicution
        |                                             |
   read file sync                               read file Async


