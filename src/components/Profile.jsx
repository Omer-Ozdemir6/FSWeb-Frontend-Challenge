import { useSelector } from "react-redux"



const Profile = () => {
    const profiles = useSelector((state) => state.profileState );

    const{basicInfo, aboutMe } = profiles;

    return  (

<section className="py-20">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-400 mb-12">
        Profile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
            <h3 className="text-2xl font-medium text-purple-700 dark:text-purple-400">
                Profile
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                {basicInfo.map((item, index) => (
                    <div key={index} className="grid grid-cols-2">
                        <span className="font-bold text-gray-800 dark:text-white">
                            {item.label}
                        </span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="space-y-6">
            <h3 className="text-2xl font-medium text-purple-700 dark:text-purple-400">
                {aboutMe.title}
            </h3>
            
            <div className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
                 
                {aboutMe.paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </div>
        </div>

      </div>
      
      <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-20"></div>

    </section>
    )
}
export default Profile