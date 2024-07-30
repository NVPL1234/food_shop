USE [jwt]
GO
SET IDENTITY_INSERT [dbo].[roles] ON 
GO
INSERT [dbo].[roles] ([role_id], [role_name]) VALUES (1, N'customer')
GO
INSERT [dbo].[roles] ([role_id], [role_name]) VALUES (2, N'employee')
GO
SET IDENTITY_INSERT [dbo].[roles] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 
GO
INSERT [dbo].[users] ([user_id], [password], [username], [role_id]) VALUES (1, N'$2y$10$WlMAwqxg6/Kv/fG3js/TreennGfyfixgwI6nsWuGTTYxUSr4S0Whu', N'0906953700', 1)
GO
SET IDENTITY_INSERT [dbo].[users] OFF
GO
INSERT [dbo].[customers] ([customer_id], [address], [customer_name], [phone_number]) VALUES (1, N'a', N'a', N'0')
GO
SET IDENTITY_INSERT [dbo].[option_categories] ON 
GO
INSERT [dbo].[option_categories] ([option_category_id], [choose_multiple], [obligate], [option_category_name]) VALUES (1, 1, 0, N'Món thêm')
GO
INSERT [dbo].[option_categories] ([option_category_id], [choose_multiple], [obligate], [option_category_name]) VALUES (2, 0, 1, N'Lượng cơm')
GO
SET IDENTITY_INSERT [dbo].[option_categories] OFF
GO
SET IDENTITY_INSERT [dbo].[product_categories] ON 
GO
INSERT [dbo].[product_categories] ([product_category_id], [product_category_name]) VALUES (1, N'Hủ tíu')
GO
INSERT [dbo].[product_categories] ([product_category_id], [product_category_name]) VALUES (2, N'Cơm')
GO
SET IDENTITY_INSERT [dbo].[product_categories] OFF
GO
SET IDENTITY_INSERT [dbo].[products] ON 
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (52, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (53, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu xá xíu', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (54, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu thập cẩm', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (55, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu tôm', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (56, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu trứng', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (57, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm sườn', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (58, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (59, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm trứng', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (60, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm sườn bì chả', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (61, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm tôm', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (62, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (63, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (64, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (65, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (66, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (67, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (68, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (69, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (70, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (71, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Hủ tíu sườn', 30, N'Phần', 25000, 1)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (72, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (73, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (74, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (75, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (76, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (77, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (78, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (79, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (80, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (81, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
INSERT [dbo].[products] ([product_id], [img_path], [product_name], [quantity], [unit], [unit_price], [product_category_id]) VALUES (82, N'https://firebasestorage.googleapis.com/v0/b/restaurantmanager-b7f1b.appspot.com/o/hu_tiu_xa_xiu.jpg?alt=media&token=debc018f-28af-47d6-9e66-6e2d0a150d1a', N'Cơm gà', 30, N'Phần', 25000, 2)
GO
SET IDENTITY_INSERT [dbo].[products] OFF
GO
INSERT [dbo].[option_details] ([option_category_id], [product_id]) VALUES (1, 57)
GO
INSERT [dbo].[option_details] ([option_category_id], [product_id]) VALUES (2, 57)
GO
SET IDENTITY_INSERT [dbo].[options] ON 
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (1, N'Sườn', 10000, 1)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (2, N'Cơm', 5000, 1)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (3, N'Tôm', 10000, 1)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (4, N'Gà', 10000, 1)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (5, N'25%', 0, 2)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (6, N'50%', 0, 2)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (7, N'75%', 0, 2)
GO
INSERT [dbo].[options] ([option_id], [option_name], [unit_price], [option_category_id]) VALUES (8, N'100%', 0, 2)
GO
SET IDENTITY_INSERT [dbo].[options] OFF
