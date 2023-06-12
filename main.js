quick_draw_data_set = ["apple","banana","city","doll","binoculars","headpones","laptop","tablet","phone"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
sketch = quick_draw_data_set[random_number];
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;


console.log(random_number);