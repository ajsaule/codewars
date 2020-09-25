# // In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

# // For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

# // Good luck!


# def solve s
#     final_arr = []
#     final_arr.each_with_index do |arr, indx|
#         final_arr.push []
#         s.split("").each do |elm|
#             if elm.is_a Integer 
#                 final_arr.push elm
#             elsif arr != []
#                 final_arr.push []
#             end
#         end
#     end
#     # s.gsub(/[^\d]/, "-")
#     final_arr
# end

# print solve "gh12cdy695m1"

# def solve s
#     final_arr = []
#     s.split("").each do |elm|
#         final_arr.push []
#         if elm.is_a Integer 
#             final_arr.push elm
#         elsif arr != []
#             final_arr.push []
#         end
#     end
# end
#     # s.gsub(/[^\d]/, "-")
#     final_arr
# end

# print solve "gh12cdy695m1"


# SOLUTION 1 -- BigO complexity is probably (n)log because of the multiple loops lol 

def solve(s)
    new_s_arr = []
    s.gsub(/[^\d]/, "-").split("-").each do |el| 
      new_s_arr << el.to_i
    end
    new_s_arr.sort()[-1]
end

p solve "gh12cdy695m1"