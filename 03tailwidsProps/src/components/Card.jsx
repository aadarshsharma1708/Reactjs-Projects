import React from 'react';

function Card({username,btnTxt="View Profile"}){ // destructuring props
    // let {username} = props; // destructuring props
    // let username = props.username; // accessing props

    //console.log("props,", props);
    console.log(username);
    
    
    return(
        <div className="md:flex bg-slate-100 border-2 border-white rounded-xl p-8 dark:bg-slate-800 m-2" >
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/30890463/pexels-photo-30890463/free-photo-of-romantic-couple-embracing-in-seaside-landscape.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
             {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
            <button className='mt-4'>{btnTxt}</button>
          </figcaption>
        </div>
      </div>
    );
}
export default Card;