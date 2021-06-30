import React  from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchedValue: ''};
    
        this.handleChange1 = this.handleChange.bind(this);
      }
//    state = {
//         searchedValue:''
//    }
handleChange1(event) {
    this.setState((prevState, prevProps) => {
        return {
            searchedValue: event.target.value
        }
    },  () => console.log(this.state.searchedValue)
    )
    // this.setState({searchedValue: event.target.value});
   
    }
handleChange = (event) => {
    this.setState((prevState, prevProps) => {
        return {
            searchedValue: event.target.value
        }
    },  () => console.log(this.state.searchedValue)
    )
    }
handleClick = () => {
    alert('Click happened');
  }
   render(){
       return (
         <div className="bg-gray-50">
               <h1 className="flex justify-center px-4 text-lg font-bold tracking-widest text-gray-600 uppercase pt-16">Search In Hadith Books</h1>
     
             <div style={{marginTop:'-80px'}} className="md:container md:mx-auto h-72 flex justify-center items-center px-4 lg:px-8 m-0  md:w-2/3">
                 <div className="relative shadow flex " style={{width:'100%'}}> 
                     <input type="text" value={this.state.value} onChange={this.handleChange}  className="h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search hadith..." />
                     <div className="absolute top-4 right-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-white w-auto flex justify-end items-center text-blue-500 hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     onClick={ () => this.handleClick() }
                     >
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
     </svg>
     {/* <button  >blbalas</button> */}
                     </div>
                 </div>
             </div>
         </div>
       )
   }
}


