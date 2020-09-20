# require 'pry'


# def dup arr, temp_arr = [], to_delete_arr = [], final_arr = [], temp_char = '' 
#     # created new arrays with split strings
#     arr.each do |str|
#         temp_arr.push(str.split(""))
#     end
#     # constructing new to_delete_arr holding all indexes that need to be deleted ...
#     # **Wrong, because we shoulnd't mutate arrays when looping over them, the indexes will not align.  
#     temp_arr.each_with_index do |arr, arr_indx|
#         to_delete_arr.push [] 
#         arr.each_with_index do |char, char_indx|
#             if temp_char == char
#                 to_delete_arr[arr_indx].push char_indx
#             end
#             temp_char = char
#         end
#     end
#     p temp_arr
#     to_delete_arr.each_with_index do |arr, arr_indx|
#         arr.each do |to_delete_indx|
#             p temp_arr[arr_indx].delete_at to_delete_indx
#         end
#     end
#     temp_arr.each do |arr|
#         final_arr.push(arr.join(""))
#     end
#     p temp_arr
#     p to_delete_arr
#     final_arr
# end

# p dup ['cccoooddeeewarrrss', 'cuccckkkkss', 'piiinguu'] 

# binding.pry

## Revise to get a better runderstanding of this question
## Very long solution compared to other found online

def dup arr, temp_arr = [], split_arr = [], finale = [], temp_char = "" 
    arr.each_with_index do |str, indx|
        temp_arr.push(str.split(""))
    end
    temp_arr.each_with_index do |array, arr_indx| 
        split_arr.push []
        array.each_with_index do |char, char_indx|
            if temp_char != char && char != ""
                split_arr[arr_indx] << char
            end
            temp_char = char
        end
        temp_char = ""
        finale.push(split_arr[arr_indx].join(""))
    end
    finale
end

p dup ['cccoooddeeewarrrss', 'cuccckkkkss', 'piiingu']

## It feels bad when you find a 1 line solution after struggling for a day.. 

def dup(arr)
    arr.map(&:squeeze)
end

p dup ['cccoooddeeewarrrss', 'cuccckkkkss', 'piiingu']