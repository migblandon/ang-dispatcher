#angDispatcher
Created by: Miguel Guevara

If you ever need to copy code in your html, then "angDispatcher" was designed for you.
Take any node in yout tree and clone it to any other node in your tree. Even take an array of nodes
and added in multiple places. 
You use two directives to handle the nodes and that is all there is. 

DIRECTIVES:

central => 'ang-central' => "ang-central='example'".

central will still print out your node but it will clone it to be used in any other location.

receiver => "ang-receiver" => "ang-receiver='example'".

receiver will receive a clone and use it has the original node.

Only add 'angDispatcher' to your project and you are all set to start using it.
Add as many centrals you need and have as many receivers as you like.
