﻿using AutoMapper;
using backend.Models;
using backend.Models.Dtos;
using backend.Models.Interfaces;
using backend.Services;
using System.Linq;

namespace backend.Mappings.Profiles
{
    public class MemberProfile : Profile
    {
        public MemberProfile()
        {
            CreateMap<Member, MemberSummaryDto>()
                .ForMember(dest => dest.Language, opt => opt.MapFrom(src => MemberService.EnglishPositions.Contains(src.Position)? Language.English.ToString() : Language.Arabic.ToString()))
                .ForMember(dest => dest.Position, opt => opt.MapFrom(src => src.Position.ToString().Replace('_', ' ')))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category));

            CreateMap<Member, MemberDto>()
                .ForMember(dest => dest.Articles, opt => opt.MapFrom(src => src.Articles))
                .ForMember(dest => dest.Language, opt => opt.MapFrom(src => MemberService.EnglishPositions.Contains(src.Position)? Language.English.ToString() : Language.Arabic.ToString()))
                .ForMember(dest => dest.Position, opt => opt.MapFrom(src => src.Position.ToString().Replace('_', ' ')))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category));
        }
    }
}
