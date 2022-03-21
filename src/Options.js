 import React from 'react';
 class Options extends React.Component{
    
     
     state={
         Choices:{
             Stabia:false,
             Preview:false,
             Lts:false,
             Linux:false,
             Mac:false,
             Windows:false,
             Conda:false,
             Pip:false,
             Libtorch:false,
             Source:false,
             Python:false,
             CJava:false,
             Cudaten:false,
             Cuda:false,
             Rocm:false,
             Cpu:false,
             disabled:false
         }
        };

         
         chkclick=(e)=>{
            var {value,checked} = e.target;
            this.setState((e)=>{
                var Selectedchoice=e.Choices;
                return Selectedchoice[value]=checked;
            });

         };

         MACOSchange=(e)=>{
             // eslint-disable-next-line no-cond-assign
             if(e.target.value="mac"){
                this.setState({
                    disabled:true
                });
             }
         }

         WindowsOSchange=(e)=>{
            // eslint-disable-next-line no-cond-assign
            if(e.target.value="windows"){
               this.setState({
                   disabled:true
               });
            }
        }
        
    render(){
        var displaychoice=Object.keys(this.state.Choices).filter((x)=>this.state.Choices[x]);
        
        return(
            <div> 
                <div className="mainMenu">
                    
                    <h3>INSTALL PYTORCH</h3>
                 
                    <div className="radio-toolbar">
                    <h2><hr></hr>PyTorch Build</h2>
                    <input type="radio" id="stable" name="build" value="Stable"  onClick={this.chkclick}/>
                        <label for="stable">Stable(1.11.0)</label>
                    
                        <input type="radio" id="preview" name="build" value="Preview" onClick={this.chkclick}/>
                        <label for="preview">Preview (Nightly)</label>
                    
                        <input type="radio" id="lts" name="build" value="LTS" onClick={this.chkclick}/>
                        <label for="lts">LTS(1.8.2)</label> 
                    </div>

                    <div className="radio-toolbar">
                    <h2><hr></hr>Your OS</h2>
                        <input type="radio" id="linux" name="os" value="Linux" onClick={this.chkclick}/>
                        <label for="linux">Linux</label>
                    
                        <input type="radio" id="mac" name="os" value="mac" onClick={this.chkclick} onChange={this.MACOSchange}/>
                        <label for="mac">Mac</label>
                    
                        <input type="radio" id="windows" name="os" value="windows" onClick={this.chkclick} onChange={this.WindowsOSchange}/>
                        <label for="windows">Windows</label> 
                    </div>

                    <div className="radio-toolbar">
                    <h2><hr></hr>Package</h2>
                    <input type="radio" id="conda" name="package" value="Conda" onClick={this.chkclick}/>
                    <label for="conda">Conda</label>

                    <input type="radio" id="Pip" name="package" value="Pip" onClick={this.chkclick}/>
                    <label for="Pip">Pip</label>

                    <input type="radio" id="libtorch" name="package" value="libtorch" onClick={this.chkclick}/>
                    <label for="libtorch">LibTorch</label> 

                    <input type="radio" id="source" name="package" value="source" onClick={this.chkclick}/>
                    <label for="source">Source</label> 
                    </div>

                    <div className="radio-toolbar">
                    <h2><hr></hr>Language</h2>
                    <input type="radio" id="Python" name="language" value="Python" onClick={this.chkclick}/>
                    <label for="Python">Python</label>

                    <input type="radio" id="CJava" name="language" value="CJava" onClick={this.chkclick}/>
                    <label for="CJava">C++/Java</label>
                    </div>

                    <div className="radio-toolbar">
                    <h2><hr></hr>Compute Platform</h2>
                    <input type="radio" id="cudaten" name="platform" value="cudaten" onClick={this.chkclick} disabled={this.state.disabled}/>
                    <label for="cudaten">CUDA 10.2</label>

                    <input type="radio" id="cuda" name="platform" value="cuda" onClick={this.chkclick} disabled={this.state.disabled} />
                    <label for="cuda">CUDA 11.3</label>

                    <input type="radio" id="rocm" name="platform" value="rocm" onClick={this.chkclick} disabled={this.state.disabled}/>
                    <label for="rocm">ROCM(beta)</label> 

                    <input type="radio" id="cpu" name="platform" value="cpu" onClick={this.chkclick}/>
                    <label for="cpu">CPU</label> 
                    </div>
                   
                  
                    <div style={{backgroundColor:"white;",color:"black;" ,paddingBottom:"20px",paddingLeft:"20px",border:"1px solid black",marginLeft:"20px",marginRight:"20px"}}>
                        <h2>Run this Command</h2>
                             {displaychoice+""}
                        </div> 
                   
                
                </div>
            </div>
        );
    }
 }

 export default Options;