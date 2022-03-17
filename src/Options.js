 import React from 'react'

 class Options extends React.Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor:"#F3F4F7;"}}>
                    <h3>INSTALL PYTORCH</h3>
                    <h5>PyTorch Build</h5>
                    <input type="checkbox" name="Stabia"/><br>Stabia(1.11.0)</br>
                    <input type="checkbox" name="Preview"/><br>Preview(Nightly)</br>
                    <input type="checkbox" name="Lts"/><br>LTS(1.8.2)</br>
                    <h5>Your OS</h5>
                    <input type="checkbox" name="Linux"/><br>Linux</br>
                    <input type="checkbox" name="Mac"/><br>Mac</br>
                    <input type="checkbox" name="Windows"/><br>Windows</br>
                    <h5>Package</h5>
                    <input type="checkbox" name="Conda"/><br>Conda</br>
                    <input type="checkbox" name="Pip"/><br>Pip</br>
                    <input type="checkbox" name="Libtorch"/><br>LibTorch</br>
                    <input type="checkbox" name="Source"/><br>Source</br>
                    <h5>Language</h5>
                    <input type="checkbox" name="Python"/><br>Preview(Nightly)</br>
                    <input type="checkbox" name="CJava"/><br>C++/Java</br>
                    <h5>Compute Plateform</h5>
                    <input type="checkbox" name="Cudaten"/><br>CUDA 10.2</br>
                    <input type="checkbox" name="Cuda"/><br>CUDA 11.3</br>
                    <input type="checkbox" name="Rocm"/><br>ROCM 4.2(beta)</br>
                    <input type="checkbox" name="Cpu"/><br>CPU</br>
                    <div style={{backgroundColor:"gray;",color:"black;"}}></div>
                </div>
            </div>
        );
    }
 }

 export default Options;