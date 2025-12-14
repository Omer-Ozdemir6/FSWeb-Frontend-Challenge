import React from "react"


const Header = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 gap-10">
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-purple-600"></div>
                    <span className="text-purple-600 font-medium">DENEME YAZISI</span>
                </div>
                <h1 className="text-5xl md:text-7xl font bold text-gray-800 dark:text-gray-400 leading-tight">
                    LOREM IPSUM <br/>
                    lorem ipsum
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-6 py-3 rounded-lg transition-colors duration-200 
                               font-medium bg-white border border-purple-700 text-purple-700 
                               dark:border-purple-300 dark:text-purple-300 dark:bg-gray-600 hover:bg-purple-700 hover:text-white dark:hover:text-black dark:hover:bg-purple-300">
                        Hire me
                    </button>
                    <button className="px-6 py-3 rounded-lg transition-colors duration-200 
                               font-medium bg-white border border-purple-700 text-purple-700 
                               dark:border-purple-300 dark:text-purple-300 dark:bg-gray-600 hover:bg-purple-700 hover:text-white dark:hover:text-black dark:hover:bg-purple-300">
                    <i className="fa-brands fa-github"></i> Github
                    </button>
                     <button className="px-6 py-3 rounded-lg transition-colors duration-200 
                               font-medium bg-white border border-purple-700 text-purple-700 
                               dark:border-purple-300 dark:text-purple-300 dark:bg-gray-600 hover:bg-purple-700 hover:text-white dark:hover:text-black dark:hover:bg-purple-300">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                    </button>
                </div>
            </div>
            <div className="flex-1 relative">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"/>

            </div>
        </section>
    )
}
export default Header;