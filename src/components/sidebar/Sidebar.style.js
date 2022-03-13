import styled from "styled-components";

export const SiedBar = styled.div`

flex: 1;
  min-height: calc(100vh - 20px);
  background-color: #dccff;
  position: sticky;
  top: 50px;
  border-radius:5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;.sidebarWrapper {
    padding: 20px;
    color: #000;
    
  }
  
  .sidebarMenu {
    margin-bottom: 10px;
  }
  
  .sidebarTitle {
    font-size: 13px;
    margin:0 0 15px 55px;
    color: red;
  }

  .sidebarList {
    list-style: none;
    padding: 5px;
  }
  
  .sidebarListItem {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  
  .sidebar-active{
    background-color: rgb(240, 240, 255);
  }

  .sidebarListItem:hover {
    background-color: rgb(240, 240, 255);
  }
  
  .sidebarIcon{
      margin-right: 5px;
      font-size: 20px !important;
  }
  span{
    margin-left: 15px;
  

  }
  p{
    font-weight:bold;
  }
`;
