<?php
# the lessons: 
# - using online IDE's to get a faster feedback loop going seems buggy
# - using string concatenation (.)operator to include expressions and functions within a return value 
# - using double quotes "{$cake_pudding}" and curlies to interpolate variables into strings
# - add <?php to start of file to get syntax highlighting for PHP 

function solutionTwo($value){
	$int_len = strlen($value."");
	$zero_len = 5 - $int_len;
	return "Value is ".str_repeat('0', $zero_len)."{$value}";
};

solutionTwo(5);

## you don't actually need to convert $value as an integer to a string, strlen(can count numbers in a integer)
## can just refactor to the below solution 

function solution($value){
	return "Value is ".str_repeat('0', 5 - strlen($value)).$value; 
};

solution(5);


# performing conole log into console with PHP we can do the following 
# function console_log($data){
#   echo '<scropt>';
#    echo 'console.log('. json_encode($data) .')';
#    echo '</script>';
# };


# Strange issue: 
# - when running code with // commented lines, I get 'Parse error: syntax error, enexpected end of file'
# - why would the comments be causing this ? 
# - maybe change the comment style for PHP in package.json config file in VS code, but how to get to that file? 
# - https://stackoverflow.com/questions/34822552/how-to-customize-comment-block-characters-in-visual-studio-code

?>

