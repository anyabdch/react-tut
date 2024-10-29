const includesDay = (class1, lst) => {
    let class1_meets = class1.split(' ');
    let class1_days = class1_meets[0].split('')

    for (var i = 0; i < lst.length; i++){   
        let class2_meets = lst[i].meets.split(' ');
        let class2_days = class2_meets[0].split('');
        for (var i = 0; i < class1_days.length; i++){
            if (class2_days.includes(class1_days[i])){
                return true;
            }
        }
    };

    return false;
}

const sameTime = (class1, lst) =>  {
    let class1_meets = class1.split(' ');
    let class1_start = class1_meets[1].substring(0, 5).split(':');
    let s_hour1 = (+ class1_start[0]);
    let s_min1 = (+ class1_start[1]);
    let class1_end = class1_meets[1].substring(6).split(':');
    let e_hour1 = (+ class1_end[0]);
    let e_min1 = (+ class1_end[1]);

    for (var i = 0; i < lst.length; i++){    
        let class2_meets = lst[i].meets.split(' ');
        let class2_start = class2_meets[1].substring(0, 5).split(':');
        let s_hour2 = (+ class2_start[0]);
        let s_min2 = (+ class2_start[1]);
        let class2_end = class2_meets[1].substring(6).split(':');
        let e_hour2 = (+ class2_end[0]);
        let e_min2 = (+ class2_end[1]);

        let start_conflict = e_hour1 > s_hour2;
        if (e_hour1 === s_hour2) {
            start_conflict = e_min1 > s_min2;
        }
        let end_conflict = s_hour1 < e_hour2;
        if (s_hour1 === e_hour2) {
            end_conflict = s_min1 < e_min2;
        }

        if (start_conflict || end_conflict){
            return true;
        }
    }
    return false;
};

export const unselectable = ({class1, lst}) => {
    return(includesDay(class1, lst) && sameTime(class1, lst));
}