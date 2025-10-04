/* ===== src/api/mockApi.js ===== */
// Small mock API to simulate fetching data from a server.


const sampleProfiles = [
{
id: 1,
name: 'Aisha Sharma',
role: 'Singer',
location: 'Mumbai, India',
attrs: ['Singing', 'YouTube', 'Bollywood Auditions'],
verified: true
},
{
id: 2,
name: 'Rohit Verma',
role: 'Full-Stack Developer',
location: 'Bengaluru, India',
attrs: ['React', 'Node.js', 'Open Source'],
verified: false
},
{
id: 3,
name: 'Sneha Rao',
role: 'Content Writer',
location: 'Delhi, India',
attrs: ['Blogs', 'SEO', 'Freelancer'],
verified: false
}]

export function fetchProfiles(){
return new Promise((resolve) => {
setTimeout(() => resolve(sampleProfiles), 600)
})
}


export function fetchStats(){
return new Promise((resolve) => {
setTimeout(() => resolve(stats), 300)
})
}