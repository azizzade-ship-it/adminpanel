import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  .topbar-wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-weight: bold;
        font-size: 30px;
        color: darkblue;
        cursor: pointer;
      }
      
      .top-right{
          display: flex;
          align-items: center;
      }
      
      .topbarIconContainer {
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        color: #555;
      }
      
    
      
      .topAvatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
      }

.badge{
    margin:5px
}

  }
`;
