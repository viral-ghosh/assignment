USE [ViralGhoshDB]
GO
/****** Object:  StoredProcedure [dbo].[stpGetCustomerDetailsByUsername]    Script Date: 22-01-2020 15:43:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[stpGetCustomerDetailsByUsername]
	-- Add the parameters for the stored procedure here
	@uname nvarchar(50),
	@username nvarchar(50) OUTPUT,
	@password nvarchar(50) OUTPUT,
	@name nvarchar(50) OUTPUT,
	@email nvarchar(50) OUTPUT,
	@gender nvarchar(50) OUTPUT,
	@company nvarchar(50) OUTPUT,
	@department nvarchar(50) OUTPUT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @username=l.username,@password=l.password,@name= c.name,@email= c.email,@gender= c.gender,@company= c.company,@department= c.department FROM loginTbl as l INNER JOIN customerTbl as c
	ON l.id = c.login_id
	WHERE l.username=@uname
END
