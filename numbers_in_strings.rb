def solve s
    final_arr = []
    final_arr.each_with_index do |arr, indx|
        final_arr.push []
        s.split("").each do |elm|
            if elm.is_a Integer 
                final_arr.push elm
            elsif arr != []
                final_arr.push []
            end
        end
    end
    # s.gsub(/[^\d]/, "-")
    final_arr
end

print solve "gh12cdy695m1"